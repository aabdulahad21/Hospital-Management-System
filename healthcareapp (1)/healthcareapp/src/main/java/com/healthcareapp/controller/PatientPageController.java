package com.healthcareapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PatientPageController {

    @GetMapping("/patients-page")
    public String patientsPage() {
        return "patients";
    }
}