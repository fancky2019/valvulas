package com.valvulas.fancky.controller;

import com.alibaba.fastjson.JSON;
import com.valvulas.fancky.model.entity.Product;
import com.valvulas.fancky.service.ProductService;
import com.valvulas.fancky.utility.TXTFile;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/*
--         concat  是mysql的，sqlite不支持
--             and ProductName LIKE CONCAT('%',#{productname,jdbcType=VARCHAR},'%')

-- sqlite 不支持
--             SELECT DISTINCT ProductName FROM `valvulas`.`product`;
 */
@Controller
public class ProductController {

    Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Resource
    private ProductService productService;

    @RequestMapping("/getProducts")
    @ResponseBody
    public List<Product> getProducts(Product product) {
        List<Product> list = new ArrayList<>();
        try {
            list = productService.getProducts(product);
            int m = 0;
        } catch (Exception ex) {
            logger.error(ex.getMessage());
        }
        return list;
    }

    @RequestMapping("/insertSqlite")
    @ResponseBody
    public void insertSqlite(Product product) {
        List<Product> list = new ArrayList<>();
        try {
            String relativelyPath = System.getProperty("user.dir");
            String jsonFilePath = relativelyPath + "\\appdata\\product.json";
            String readJson = TXTFile.readText(jsonFilePath);
            List<Product> products = JSON.parseArray(readJson, Product.class);
            products.forEach(p ->
            {
                int re = productService.insert(p);
                int n = 0;
            });

            int m = 0;
        } catch (Exception ex) {
            logger.error(ex.getMessage());
        }

    }

    @RequestMapping("/createJson")
    @ResponseBody
    public List<Product> createJson(Product product) {
        List<Product> list = new ArrayList<>();
        try {
            list = productService.getProducts(product);


            String jsonString = JSON.toJSONString(list);
            String relativelyPath = System.getProperty("user.dir");
            String jsonFilePath = relativelyPath + "\\appdata\\product.json";
            TXTFile.writeTxt(jsonFilePath, jsonString);
            String readJson = TXTFile.readText(jsonFilePath);
            List<Product> products = JSON.parseArray(readJson, Product.class);

            int m = 0;
        } catch (Exception ex) {
            logger.error(ex.getMessage());
        }
        return list;
    }

    @RequestMapping("/getProductNames")
    @ResponseBody
    public List<String> getProductNames() {
        List<String> list = new ArrayList<>();
        try {
            list = productService.getProductNames();
            int m = 0;
        } catch (Exception ex) {
            logger.error(ex.getMessage());
        }
        return list;
    }

    //%Tomcat_Home%/bin
    @RequestMapping("/getRelativelyPath")
    @ResponseBody
    public String getRelativelyPath() {

        try {
            String relativelyPath = System.getProperty("user.dir");

            return relativelyPath;


        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return "ex.getMessage()";
        }

    }

    ///D:/fancky/Java/tomcat/apache-tomcat-9.0.16/webapps/fancky-test/WEB-INF/classes/
    @RequestMapping("/getWebAppPath")
    @ResponseBody
    public String getWebAppPath() {

        try {
            String relativelyPath = this.getClass().getClassLoader().getResource("/").getPath();
//this.getClass().getClassLoader().getResource("/").getPath();
            return relativelyPath;


        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return "ex.getMessage()";
        }

    }


}
