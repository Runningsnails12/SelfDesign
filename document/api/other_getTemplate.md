[返回API列表](../API-documentation.md)
## 获取组件模板

#### method: `POST`
#### URL: `/other/getTemplate`
#### describe:

#### request:
| header |  example  | describe |
| :----: | :-------: | :------: |
| token  | asdqwezxc |   令牌   |

#### response:
```json
{
	"flag": true,
	"code": 2000,
	"message": "获取成功",
	"data": {
		"templates":[
			{
				"tag": "PositionLayout",
				"style": {},
				"children": [],
				"events":[],
			},
			{
				"tag": "HorizontalLayout",
				"style": {},
				"children": [],
				"events":[],
			},
			{
				"tag": "VerticalLayout",
				"style": {},
				"children": [],
				"events":[],
			},
			{
				"tag": "Text",
				"style": {},
				"values": {
					"content": "",
				},
				"events":[],
			},
			{
				"tag": "Button",
				"style": {},
				"values": {
					"content": "",
				},
				"events":[],
			},
			{
				"tag": "Image",
				"style": {},
				"values": {
					"url": "",
				},
				"events":[],
			},
		]
	}
}
```