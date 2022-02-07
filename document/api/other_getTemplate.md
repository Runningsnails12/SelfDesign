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
		"templates": {
			"PositionLayout": {
				"tag": "PositionLayout",
				"style": {},
				"children": [],
				"events": []
			},
			"HorizontalLayout": {
				"tag": "HorizontalLayout",
				"style": {},
				"children": [],
				"events": []
			},
			"VerticalLayout": {
				"tag": "VerticalLayout",
				"style": {},
				"children": [],
				"events": []
			},
			"Text": {
				"tag": "Text",
				"style": {},
				"values": {
					"content": "",
				},
				"events": []
			},
			"Button": {
				"tag": "Button",
				"style": {},
				"values": {
					"content": "",
				},
				"events": []
			},
			"Image": {
				"tag": "Image",
				"style": {},
				"values": {
					"url": "",
				},
				"events": []
			}
		}
	}
}
```