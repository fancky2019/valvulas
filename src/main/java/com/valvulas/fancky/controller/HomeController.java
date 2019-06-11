package com.valvulas.fancky.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;

@Controller
//@RequestMapping("/home")
public class HomeController {
    @RequestMapping("")
    public String Index(HashMap<String, Object> map, Model model) {
        model.addAttribute("say", "欢迎欢迎,热烈欢迎");
        map.put("hello", "欢迎进入HTML页面");
        return "index";
    }

    @RequestMapping("/index")
    public String IndexHome(HashMap<String, Object> map, Model model) {
        model.addAttribute("say", "欢迎欢迎,热烈欢迎");
        map.put("hello", "欢迎进入HTML页面");
        return "index";
    }

    @RequestMapping("/service")
    public String service() {

        return "service";
    }

    @RequestMapping("/product")
    public String product() {

        return "product";
    }

    @RequestMapping("/contract")
    public String contract() {

        return "contract";
    }


    //region product
    @RequestMapping("/balance")
    public String balance(HashMap<String, Object> map) {
        map.put("product", "balance");
        return "product/dynamic";
//        return "product/balance";
    }

    @RequestMapping("/brassAngle")
    public String brassAngle() {
        return "product/dynamic";
//        return "product/brassAngle";
    }

    @RequestMapping("/brassBall")
    public String brassBall() {
        return "product/dynamic";
//        return "product/brassBall";
    }

    @RequestMapping("/bronze")
    public String bronze() {
        return "product/dynamic";
//        return "product/bronze";
    }

    @RequestMapping("/check")
    public String check() {
        return "product/dynamic";
//        return "product/check";
    }

    @RequestMapping("/gate")
    public String gate() {
        return "product/dynamic";
//        return "product/gate";
    }

    @RequestMapping("/pressureReduce")
    public String pressureReduce() {
        return "product/dynamic";
//        return "product/pressureReduce";
    }

    @RequestMapping("/productDynamic")
    public String productDynamic() {
        return "product/dynamic";
    }
    //endregion
}
