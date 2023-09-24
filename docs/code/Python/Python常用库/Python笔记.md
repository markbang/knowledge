# Python笔记

1.pd.DataFrame,这是Pandas创建DataFrame的格式,记得大写

DF的每一列就是一个Serious

2.读入文本格式数据文件

pandas.read_table():更通用的文本读取代码<br>	主要的区别在于默认的sep="/t",即tab	

3.pd.read_excel(<br>	filepath_or_buffer: 要读入的文件路径<br>	sheet_name:要读入的表单，字符串或者数字序号均可，默认读入第一个<br>)

```python
pd.read_csv(
	filepath or buffer:要读入的文件路径
	sep='，'：列分隔符
	header='infer'：指定数据中的第几行作为变量名
	names = None:自定义变量名列表
	index_col = None：将会被用作索引的列名，多列时只能使用序号列表<br>	usecols = None：指定只读入某些列，使用索引列表或者名称列表均可。
			[0，1，3]，[”名次”，”学校名称”，”所在地区”]
	encoding = None:读入文件的编码方式
			utf-8/GBK，中文数据文件最好设定为utf-8
	na_values：指定将被读入为缺失值的数值列表，默认下列数据被读入为缺失值：
			' '，'#N/A', '#N/A N/A', '#NA', '-1.#IND',
			'-1.#QNAN', '-NaN', '-nan', '1.#IND', '1.#QNAN', 
			‘N/A',  'NA', 'NULL', 'NaN', 'n/a', 'nan', 'null'
)：读取csv格式文件，但也可通用于文本文件读取
```

4.![image-20230924212132039](https://bangwu.oss-cn-shanghai.aliyuncs.com/img/image-20230924212132039.png)
