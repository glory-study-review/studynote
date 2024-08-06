export default [
    {
        text: "Spring",
        collapsible: true,//设置分组是否可以折叠，默认值是 false,
        // link: "spring-framework/",
        prefix: "spring-framework/",
        children: [
        "循环依赖",
        "spring声明式事务",
        "aop"
        ],
    },
    {
        text: "SpringBoot",
        collapsible: true,
        // link: "springboot/",
        prefix: "springboot/",
        children: [
            "springbootaop代理生成流程"
        ],
    },
    {
        text: "SpringCloud",
        collapsible: true,
        // link: "springcloud/",
        prefix: "springcloud/",
        children: [
            "springcloudgateway"
        ],
    },
  ];
  