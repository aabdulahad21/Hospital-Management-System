package com.healthcareapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/patients.html")
    public String patients() {
        return "patients";
    }
    @GetMapping("/doctors.html")
    public String doctors() {
        return "doctors";
    }

}