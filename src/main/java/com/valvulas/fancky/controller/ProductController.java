package com.valvulas.fancky.controller;

import com.valvulas.fancky.model.entity.Product;
import com.valvulas.fancky.service.ProductService;
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

@Controller
public class ProductController {

    Logger logger=LoggerFactory.getLogger(ProductController.class);

    @Resource
    private ProductService productService;

    @RequestMapping("/getProducts")
    @ResponseBody
    public   List<Product> getProducts(Product product) {
        List<Product> list=new ArrayList<>() ;
        try {
            list = productService.getProducts( product);
            logger.error("ddd");
        }
       catch (Exception ex)
       {
           logger.error(ex.getMessage());
       }
        return list;
    }

}
