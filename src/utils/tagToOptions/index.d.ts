import type { PropertiesHyphen } from 'csstype';

export type Properties = PropertiesHyphen
export type PropertiesName = keyof PropertiesHyphen
export type PropertyType = 'string' | 'number' | 0;
export type PropertyTypes = ('string' | 'number' | 0)[]
export type ComponentOptions = Partial<Record<PropertiesName, PropertyTypes | PropertyType>>;
export type Result = { options: ComponentOptions; subOptions?: ComponentOptions, values?: Record<string, string>; event?: string[] };

/**
 * 根据标签名返回组件选项
 * 用法见 src/utils/tagToOptions/README.md
 * @param tag 标签名
 * @return 一个标签对应的选项的对象：{ options: 组件自身的选项及其类型; subOptions（可能有）: 布局组件的子元素选项及其类型; values（可能有）: 组件特殊值及其类型; event（可能有）: 组件事件类型 }；如果标签名不存在，则返回 null
 */
export function tagToOptions(tag: string): Result | null;
