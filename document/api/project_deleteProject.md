[返回API列表](../API-documentation.md)
## 删除项目

#### method: `GET`
#### URL: `/project/deleteProject`
#### describe:

#### request:
| header |  example  | describe |
| :----: | :-------: | :------: |
| token  | asdqwezxc |   令牌   |

| params |  type  | example | describe |
| :----: | :----: | :-----: | :------: |
|   id   | string |  10001  |  项目ID  |

#### response:
```json
{
	"flag": true,
	"code": 2000,
	"message": "删除成功",
	"data": null
}
```