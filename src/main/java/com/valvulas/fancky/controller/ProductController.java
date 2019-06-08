package com.valvulas.fancky.controller;

import com.valvulas.fancky.model.entity.Product;
import com.valvulas.fancky.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

@Controller
public class ProductController {


    @Resource
    private ProductService productService;

    @RequestMapping("/getProducts")
    @ResponseBody
    public   List<Product> getProducts(Product product) {
        //用对象
        List<Product> list = productService.getProducts( product);
        return list;
    }

}
