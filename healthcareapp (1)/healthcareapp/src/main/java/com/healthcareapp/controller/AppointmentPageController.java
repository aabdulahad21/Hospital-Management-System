package com.healthcareapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppointmentPageController {

    @GetMapping("/appointments-page")
    public String appointmentsPage() {
        return "appointments";
    }
}