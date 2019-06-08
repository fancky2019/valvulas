package com.valvulas.fancky.service;

import com.valvulas.fancky.dao.ProductMapper;
import com.valvulas.fancky.model.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductMapper productMapper;

    public List<Product> getProducts(Product product) {
        try {
            return productMapper.getProducts( product);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
