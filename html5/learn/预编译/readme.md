# 预编译 四个步骤 发生在函数执行之前
    1. 创建一个AO对象
    2. 找形参和变量声明，将变量声明和形参作为AO属性名，值为udefined
    3. 将实参和形参值统一
    4. 在函数体里找函数声明，将函数名作为AO对象的属性名，值赋予函数体

    AO{
        a:udefined
        b:udefined
    }
    AO{
        a:1
        b:udefined
    }
    AO{
        a:function () {}
        b:udefined
        d：function () {}
    }
    ...
    进行计算机编译
    ...
    AO{
        a:123
        b:udefined
        d：function () {}
    }

# 预编译也发生在全局
    1. 创建GO对象
    2. 找形参和变量声明，将变量声明和形参作为GO属性名，值为undefined
    3. 在函数体里找函数声明，将函数名作为GO对象的属性名，值赋予函数体


    GO{

    }
    GO===window