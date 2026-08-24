package com.healthcareapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MedicinePageController {

    @GetMapping("/medicines-page")
    public String medicinesPage() {
        return "medicines";
    }
}