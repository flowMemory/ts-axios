/*
    Tips：
        一. 定义全局的请求参数配置文件
        二. 以接口的方式定义参数类型要求
        三. 参数说明
            1. data   可选参数，作为请求体的json对象
            2. params 可选参数，作为请求的url参数
*/ 


// 定义所有的有效请求类型 - 创建一种字面量自定义Method类型，该类型只包含以下值
// 这里使用了 type 关键字！
export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
    url: string,
    method?: Method,
    data?: any,
    params?: any
}