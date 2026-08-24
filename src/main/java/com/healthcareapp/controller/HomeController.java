package com.healthcareapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/patientsPage")
    public String patientsPage() {
        return "patients";
    }

    @GetMapping("/doctorsPage")
    public String doctorsPage() {
        return "doctors";
    }

    @GetMapping("/appointmentsPage")
    public String appointmentsPage() {
        return "appointments";
    }

    @GetMapping("/medicinesPage")
    public String medicinesPage() {
        return "medicines";
    }
}