package com.healthcareapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DoctorPageController {

    @GetMapping("/doctors-page")
    public String doctorsPage() {
        return "doctors";
    }
}