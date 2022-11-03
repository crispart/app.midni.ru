export default class EnvironmentUtils {
  public static isProduction = (): boolean => process.env.NODE_ENV === 'production';

  public static isDevelopment = (): boolean => !EnvironmentUtils.isProduction();
}
