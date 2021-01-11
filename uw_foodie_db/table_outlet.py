import urllib.request
import json
# import pymysql.cursors

# 执行sql语句
# def exe(statement):
#     try:
#         with connection.cursor() as cursor:
#             cursor.execute(statement)
#         connection.commit()
#     except Exception as e:
#         print("error: " + statement)
#         raise e

# 创建表格
# def create_tables(create_table_sql):
#     with open(create_table_sql) as f:
#         content = f.read()
#     lines = content.replace('\n', '').split(';')
#     for l in lines:
#         l = l.strip()
#         if l:
#             print(l)
#             exe(l)

# 把None转化Null
# 把双引号变成单引号
# 把string外加引号，int外不加引号
# 逗号隔开，最后加括号
# eg:     val = ['a',None,3]
#         list_to_vals(val) = ('a',Null,3)
def list_to_vals(val):
    for i in range(len(val)):
        if(val[i] == None):
            val[i] = 'Null'
        elif(type(val[i]) == str):
            val[i] = '"' + val[i].replace("\"","'") + '"'
        else:
            val[i] = str(val[i])
    return '(' +  ','.join(val) + ')'


# 把vals数组转成sql语句stmts
def vals_to_stmts(table_name, attrs_sql, vals):
    table_col = table_name + ' (' + ','.join(attrs_sql) + ')'
    s = 'insert into {} values '.format(table_col)
    return s + ','.join(vals)


def main():
    # create_table_sql = 'foodie_db.sql'
    table_name = "Outlet"
    attrs_sql = ['Outlet_id','Outlet_name','Outlet_logo','O_Building_id','Outlet_latitude','Outlet_longitude','Outlet_discription','Outlet_notice']
    attrs_json = ['outlet_id','outlet_name','logo','building','latitude','longitude','description','notice']
    json_url = "https://api.uwaterloo.ca/v2/foodservices/locations.json?key=faab3e1919190808a1f6ab10afadf277"

    # mysql_name = "root"
    # mysql_passward = "307715"
    # database_name = "foodie"

    # connection = pymysql.connect("localhost", mysql_name, mysql_passward, database_name, charset='utf8')
    # create_tables(create_table_sql)

    with urllib.request.urlopen(json_url) as url:
        data = json.loads(url.read().decode())

    vals = []
    for i, l in enumerate(data["data"]):
        val = [ l.get(a,'') for a in attrs_json]
        vals.append(list_to_vals(val))
    # print(vals)

    stmts = vals_to_stmts(table_name, attrs_sql, vals)
    print(stmts.encode('utf8'))

    # exe(stmts)

if __name__ == '__main__':
    main()






