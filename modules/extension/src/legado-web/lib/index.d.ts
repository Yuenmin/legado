import * as axios from 'axios';

type webReadConfig = {
  theme: number
  font: number
  fontSize: number
  readWidth: number
  infiniteLoading: boolean
  customFontName: string
  jumpDuration: number
  spacing: {
    paragraph: number
    line: number
    letter: number
  }
}

/** https://github.com/gedoor/legado/tree/master/app/src/main/java/io/legado/app/data/entities */
type BaseBook = {
  name: string
  author: string
  bookUrl: string
  kind?: string
  wordCount?: string
  variable?: string
  /** 忽略序列化
    infoHtml?: string
    tocHtml?: string
    */
}
type Book = BaseBook & {
  // 目录页Url (toc=table of Contents)
  tocUrl: string
  // 书源URL(默认BookType.local)
  origin: string
  //书源名称 or 本地书籍文件名
  originName: string
  // 分类信息(用户修改)
  customTag?: string
  // 封面Url(书源获取)
  coverUrl?: string
  // 封面Url(用户修改)
  customCoverUrl?: string
  // 简介内容(书源获取)
  intro?: string
  // 简介内容(用户修改)
  customnumberro?: string
  // 自定义字符集名称(仅适用于本地书籍)
  charset?: string
  // 类型详见BookType
  type: number
  // 自定义分组索引号
  group: number
  // 最新章节标题
  latestChapterTitle?: string
  // 最新章节标题更新时间
  latestChapterTime: number
  // 最近一次更新书籍信息的时间
  lastCheckTime: number
  // 最近一次发现新章节的数量
  lastCheckCount: number
  // 书籍目录总数
  totalChapterNum: number
  // 当前章节名称
  durChapterTitle?: string
  // 当前章节索引
  durChapterIndex: number
  // 当前阅读的进度(首行字符的索引位置)
  durChapterPos: number
  // 最近一次阅读书籍的时间(打开正文的时间)
  durChapterTime: number
  // 刷新书架时更新书籍信息
  canUpdate: boolean
  // 手动排序
  order: number
  //书源排序
  originOrder: number
  //阅读设置
  readConfig?: ReadConfig
  //同步时间
  syncTime: number
}
type SeachBook = BaseBook & {
  /** 书源 */
  origin: string
  originName: string
  /** BookType */
  type: number
  coverUrl?: string
  intro?: string
  latestChapterTitle?: string
  /** 目录页Url (toc=table of Contents) */
  tocUrl: string
  time: number
  originOrder: number
  chapterWordCountText?: string
  chapterWordCount: number0
  respondTime: number
}
type BookProgress = Pick<
  Book,
  | 'name'
  | 'author'
  | 'durChapterIndex'
  | 'durChapterPos'
  | 'durChapterTime'
  | 'durChapterTitle'
>

type BookChapter = {
  url: string // 章节地址
  title: string // 章节标题
  isVolume: boolean // 是否是卷名
  baseUrl: string // 用来拼接相对url
  bookUrl: string // 书籍地址
  index: number // 章节序号
  isVip: boolean // 是否VIP
  isPay: boolean // 是否已购买
  resourceUrl?: string // 音频真实URL
  tag?: string // 更新时间或其他章节附加信息
  start?: number // 章节起始位置
  end?: number // 章节终止位置
  startFragmentId?: string //EPUB书籍当前章节的fragmentId
  endFragmentId?: string //EPUB书籍下一章节的fragmentId
  variable?: string //变量
}

/** https://github.com/gedoor/legado/tree/master/app/src/main/java/io/legado/app/data/entities */
type BaseSource = {
  /**
   * 并发率
   */
  concurrentRate?: string
  /**
   * 登录地址
   */
  loginUrl?: string

  /**
   * 登录UI
   */
  loginUi?: string

  /**
   * 请求头
   */
  header?: string

  /**
   * 启用cookieJar
   */
  enabledCookieJar?: boolean

  /**
   * js库
   */
  jsLib?: string
}
type BookSoure = BaseSource & {
  // 地址，包括 http/https
  bookSourceUrl: string
  // 名称
  bookSourceName: string
  // 分组
  bookSourceGroup?: string
  // 类型，0 文本，1 音频, 2 图片, 3 文件（指的是类似知轩藏书只提供下载的网站）
  bookSourceType: number
  // 详情页url正则
  bookUrlPattern?: string
  // 手动排序编号
  customOrder: number
  // 是否启用
  enabled: boolean
  // 启用发现
  enabledExplore: boolean
  // 登录检测js
  loginCheckJs?: string
  // 封面解密js
  coverDecodeJs?: string
  // 注释
  bookSourceComment?: string
  // 自定义变量说明
  variableComment?: string
  // 最后更新时间，用于排序
  lastUpdateTime: number
  // 响应时间，用于排序
  respondTime: number
  // 智能排序的权重
  weight: number
  // 发现url
  exploreUrl?: string
  // 发现筛选规则
  exploreScreen?: string
  // 发现规则
  ruleExplore?: ExploreRule
  // 搜索url
  searchUrl?: string
  // 搜索规则
  ruleSearch?: SearchRule
  // 书籍信息页规则
  ruleBookInfo?: BookInfoRule
  // 目录页规则
  ruleToc?: TocRule
  // 正文页规则
  ruleContent?: ContentRule
  // 段评规则
  ruleReview?: ReviewRule
}
/* type ExploreRule = {
    [prop:string]: string
}
type BookInfoRule = {
    [prop:string]: string
}
type TocRule = {
    [prop:string]: string
}
type ContentRule = {
    [prop:string]: string
}
type ReviewRule = {
    [prop:string]: string
} */
type RssSource = BaseSource & {
  sourceUrl: string
  // 名称
  sourceName: string
  // 图标
  sourceIcon: string
  // 分组
  sourceGroup?: string
  // 注释
  sourceComment?: string
  // 是否启用
  enabled: boolean
  // 自定义变量说明
  variableComment?: string
  /**登录检测js**/
  loginCheckJs?: string
  /**封面解密js**/
  coverDecodeJs?: string
  /**分类Url**/
  sortUrl?: string
  /**是否单url源**/
  singleUrl: boolean
  /*列表规则*/
  /**列表样式,0,1,2**/
  articleStyle: number
  /**列表规则**/
  ruleArticles?: string
  /**下一页规则**/
  ruleNextPage?: string
  /**标题规则**/
  ruleTitle?: string
  /**发布日期规则**/
  rulePubDate?: string
  /*webView规则*/
  /**描述规则**/
  ruleDescription?: string
  /**图片规则**/
  ruleImage?: string
  /**链接规则**/
  ruleLink?: string
  /**正文规则**/
  ruleContent?: string
  /**正文url白名单**/
  contentWhitelist?: string
  /**正文url黑名单**/
  contentBlacklist?: string
  /**
   * 跳转url拦截,
   * js, 返回true拦截,js变量url,可以通过js打开url,比如调用阅读搜索,添加书架等,简化规则写法,不用webView js注入
   * **/
  shouldOverrideUrlLoading?: string
  /**webView样式**/
  style?: string
  enableJs: boolean
  loadWithBaseUrl: boolean
  /**注入js**/
  injectJs?: string
  /*其它规则*/
  /**最后更新时间，用于排序**/
  lastUpdateTime: number
  customOrder: number
}
type Source = BookSoure | RssSource

type LeagdoApiResponse<T> = {
    isSuccess: boolean;
    errorMsg: string;
    data: T;
};
declare let legado_http_entry_point: string;
declare let legado_webSocket_entry_point: string;
declare let wsOnError: typeof WebSocket.prototype.onerror;
declare let wsOnMessage: typeof WebSocket.prototype.onmessage;
declare const setWebsocketOnMessage: (callback: typeof wsOnMessage) => ((this: WebSocket, ev: MessageEvent) => any) | null;
declare const setWebsocketOnError: (callback: typeof wsOnError) => void;
declare const setApiEntryPoint: (http_entry_point: string, webSocket_entry_point: string) => void;
declare const _default: {
    getReadConfig: (http_url?: string) => Promise<webReadConfig | undefined>;
    saveReadConfig: (config: webReadConfig) => Promise<axios.AxiosResponse<LeagdoApiResponse<string>, any>>;
    saveBookProgress: (bookProgress: BookProgress) => Promise<axios.AxiosResponse<any, any>>;
    saveBookProgressWithBeacon: (bookProgress: BookProgress) => void;
    getBookShelf: () => Promise<axios.AxiosResponse<LeagdoApiResponse<Book[]>, any>>;
    getChapterList: (bookUrl: string) => Promise<axios.AxiosResponse<LeagdoApiResponse<BookChapter[]>, any>>;
    getBookContent: (bookUrl: string, chapterIndex: number) => Promise<axios.AxiosResponse<LeagdoApiResponse<string>, any>>;
    search: (searchKey: string, onReceive: (data: SeachBook[]) => void, onFinish: () => void) => void;
    saveBook: (book: BaseBook) => Promise<axios.AxiosResponse<LeagdoApiResponse<string>, any>>;
    deleteBook: (book: BaseBook) => Promise<axios.AxiosResponse<LeagdoApiResponse<string>, any>>;
    getSources: () => Promise<axios.AxiosResponse<any, any>>;
    saveSources: (data: Source[]) => Promise<axios.AxiosResponse<LeagdoApiResponse<Source[]>, any>>;
    saveSource: (data: Source) => Promise<axios.AxiosResponse<LeagdoApiResponse<string>, any>>;
    deleteSource: (data: Source[]) => Promise<axios.AxiosResponse<LeagdoApiResponse<string>, any>>;
    debug: (sourceUrl: string, searchKey: string, onReceive: (data: string) => void, onFinish: () => void) => void;
    getProxyCoverUrl: (coverUrl: string) => string;
    getProxyImageUrl: (bookUrl: string, src: string, width: number | `${number}`) => string;
};

/** @type {string} localStorage保存自定义阅读http服务接口的键值 */
declare const baseURL_localStorage_key = "remoteUrl";
declare const ajax: axios.AxiosInstance;

export { type BaseBook, type Book, type BookChapter, type BookProgress, type BookSoure, type LeagdoApiResponse, type RssSource, type SeachBook, type Source, _default as apis, ajax as axiosInstance, baseURL_localStorage_key, legado_http_entry_point, legado_webSocket_entry_point, setApiEntryPoint, setWebsocketOnError, setWebsocketOnMessage, type webReadConfig };
