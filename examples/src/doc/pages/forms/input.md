## Input

### 代码演示
```html
<vm-input />
```  

### Props
属性 | 说明 | 类型 | 默认值
-----|-----|-------|------
placeholder | 规定帮助用户填写输入字段的提示 | String | -
readonly | 把输入字段设置为只读 | Boolean | false
clearable | 是否显示清楚按钮 | Boolean | false
maxlength | 规定输入字段中的字符的最大长度 | Number | -
autofocus | 规定输入字段在页面加载时是否获得焦点 | Boolean | false
type | 规定 input 元素的类型 | String | text
theme | 设置主题,可选参数（default，transparent，underline） | String | default

### 全局配置
Vmui.config => input.pre-themes
