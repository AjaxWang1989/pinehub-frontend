import AppServiceProvider from './AppServiceProvider';
import HttpServiceProvider from './HttpServiceProvider';
import RouterServiceProvider from './RouterServiceProvider';
import CommandServiceProvider from './CommandServiceProvider';
import ModelsServiceProvider from './ModelsServiceProvider';
import ConfigServiceProvider from './ConfigServiceProvider';
import ExceptionsServiceProvider from './ExceptionsServiceProvider';
import ValidateServiceProvider from './ValidateServiceProvider';
export default {
  configServiceProvider: ConfigServiceProvider,
  appServiceProvider: AppServiceProvider,
  httpServiceProvider: HttpServiceProvider,
  routerServiceProvider: RouterServiceProvider,
  commandServiceProvider: CommandServiceProvider,
  modelsServiceProvider: ModelsServiceProvider,
  exceptionsServiceProvider: ExceptionsServiceProvider,
  validateServiceProvider: ValidateServiceProvider
};
