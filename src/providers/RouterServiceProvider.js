import ServiceProvider from './ServiceProvider';
import VueRouter from 'vue-router';
import {routes, routeMap} from '../routes';
import _ from 'underscore';
export default class RouteServiceProvider extends ServiceProvider {
    constructor(app) {
        super(app);
    }
    register() {
        this.app.use(VueRouter);
        let routerArray = [];
        _.each(routes, function(route) {
            let r = route.getRoute();
            _.each(r, function(route) {
                routerArray.push(route);
            });
        });
        this.router = this. app.register('vue-router',  new VueRouter({
            routes: routerArray,
            mode: 'history'
        }));
        this.app.register('routeMap', routeMap);
        let self = this;
        this.router.beforeEach((to, from, next) => {
            self.beforeEach(to, from, next);
        });
    }
    async beforeEach(to, from, next) {
        this.app['$route'] = to;
        if(to.query['from'] === 'sign-in') {
            next();
        }
        let isLogin = await this.app.token.getToken();
        if(isLogin) {
            let menu = this.app.instances['vue-store'].getters['menus/getMenuByRouteName'](to.name);
            this.app.instances['vue-store'].state.menus.activeMenu = menu ? menu['id'] : null;
            if(!to.redirect){
                next();
            }else{
                this.router.push(to.redirect);
            }
        }else if(to.name !== 'sign-in'){
            let redirectTo = from.fullPath;
            if(to.name !== null) {
                redirectTo = to.fullPath;
            }

            this.router.replace({
                name: 'sign-in',
                query: {
                    redirectTo: redirectTo
                }
            });
        }else{
            next();
        }
    }
}
