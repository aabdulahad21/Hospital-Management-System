package com.healthcareapp.controller;

import com.healthcareapp.dto.DashboardResponse;
import com.healthcareapp.repository.AppointmentRepository;
import com.healthcareapp.repository.DoctorRepository;
import com.healthcareapp.repository.MedicineRepository;
import com.healthcareapp.repository.PatientRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final AppointmentRepository appointmentRepository;
    private final MedicineRepository medicineRepository;

    public DashboardController(PatientRepository patientRepository,
                               DoctorRepository doctorRepository,
                               AppointmentRepository appointmentRepository,
                               MedicineRepository medicineRepository) {

        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.appointmentRepository = appointmentRepository;
        this.medicineRepository = medicineRepository;
    }

    @GetMapping("/dashboard")
    public DashboardResponse getDashboard() {

        return new DashboardResponse(
                patientRepository.count(),
                doctorRepository.count(),
                appointmentRepository.count(),
                medicineRepository.count()
        );
    }
}