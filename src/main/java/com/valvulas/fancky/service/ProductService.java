package com.valvulas.fancky.service;

import com.valvulas.fancky.controller.ProductController;
import com.valvulas.fancky.dao.ProductMapper;
import com.valvulas.fancky.model.entity.Product;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    Logger logger = LoggerFactory.getLogger(ProductService.class);
    @Autowired
    ProductMapper productMapper;

    public int insert(Product product) {
        try {
            return productMapper.insert(product);
        } catch (Exception e) {
            logger.error(e.toString());
            return -1;
        }
    }

    public List<Product> getProducts(Product product) {
        try {
            return productMapper.getProducts(product);
        } catch (Exception e) {
            logger.error(e.toString());
            return null;
        }
    }

    public List<String> getProductNames() {
        try {
            return productMapper.getProductNames();
        } catch (Exception e) {
            logger.error(e.toString());
            return null;
        }
    }

}
