# Python笔记

## 1.pd.DataFrame,

这是Pandas创建DataFrame的格式,记得大写
DF的每一列就是一个Series

## 2.读入文本格式数据文件

pandas.read_table():更通用的文本读取代码
主要的区别在于默认的sep="/t",即tab	

## pd.read_csv()

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

## describe命令

一次性输出常用的集中趋势和离散趋势汇总指标
百分位数的输出为其特色功能

```python
df.describe(
    percentiles:需要输出的百分位数，列表格式提供，如[.25, .5, .75]
    include = "None" :要求纳入分析的变量类型白名单
    	None (default) :只纳入数值变量列
    	A list0-like of dtypes :列表格式提供希望纳入的类型
    	"all": 全部纳入
    exclude: 要求剔除分析的变量类型黑名单，选项同上
)
```

## 单变量的评数统计

```python
Series.value_counts(
	normalize = False: 是否返回构成比例而不是原始频数
	sort = True:是否按照频数排序（否则按照原始顺序排列）
	ascending = False:是否升序排列
	bins: 对数值变量直接进行分段。可看作是判断pd.cut的简易用法
	dropna = True: 结果中是否包括NaN
)
```

## 交叉表

```python
pd.crosstab(
	行列设定
		index / columns: 行变量/列变量，多个时以list形式提供
		rownames / colnames = None: 交叉表的行列名称
	单元格设定
		Values: 在单元格中需要汇总的变量列，需要进一步指定aggfunc
		aggfunc: 相应的汇总函数
	行列百分比计算
		normalize = False: {"all","index", "columns"}, or {0,1}
		"all" / True: 总计百分比
		"index" / 0:分行计算百分比
		"columns" / 1: 分列计算百分比
		当margins = True时，也同时计算边际汇总的百分比
	汇总设定
		margins = False : 是否加入行列汇总
		margins_name = "All": 汇总行/列的名称
		dropna = True: 
		
	)
```

