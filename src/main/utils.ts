export default class Utils {
  public static getBrowserInfo(): any {
    return {
      opera: navigator.userAgent.indexOf(' OPR/') >= 0,
      ie: navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("rv:11.0") >= 0
    }
  }
}
