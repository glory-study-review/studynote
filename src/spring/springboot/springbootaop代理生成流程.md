# SpringBoot的AOP代理生成流程

主要通过AnnotationAwareAspectJAutoProxyCreator类后置处理器，在bean生命周期的初始化阶段，后置处理器处理时生成AOP代理

![流程](./../../.vuepress/public/img/流程.svg)

@EnableAspectJAutoProxy注解中通过@Import导入**AspectJAutoProxyRegistrar**类

![image-20240805144118961](./../../.vuepress/public/img/image-20240805144118961.png)

在AspectJAutoProxyRegistrar类中注册**AnnotationAwareAspectJAutoProxyCreator**后置处理器

![image-20240805145154104](./../../.vuepress/public/img/image-20240805145154104.png)



在Bean的初始化阶段会根据各后置处理器进行处理，其中通过AnnotationAwareAspectJAutoProxyCreator 调用 postProcessBeforeInitialization()方法获取AOP代理对象

AbstractAutowireCapableBeanFactory类中的方法：

![image-20240805150423807](./../../.vuepress/public/img/image-20240805150423807.png)

AnnotationAwareAspectJAutoProxyCreator 并没有实现postProcessBeforeInitialization()，实则调用的**AbstractAutoProxyCreator**类的方法

![image-20240805151604928](./../../.vuepress/public/img/image-20240805151604928.png)

![image-20240805150706678](./../../.vuepress/public/img/image-20240805150706678.png)

wrapIfNecessary()方法中的createProxy()方法，就是使用ProxyFactory创建的AOP代理对象

![image-20240805151819628](./../../.vuepress/public/img/image-20240805151819628.png)

![image-20240805151954236](./../../.vuepress/public/img/image-20240805151954236.png)