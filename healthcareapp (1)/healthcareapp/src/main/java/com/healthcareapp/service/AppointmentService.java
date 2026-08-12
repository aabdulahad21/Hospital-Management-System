package com.healthcareapp.service;

import com.healthcareapp.dto.AppointmentRequest;
import com.healthcareapp.entity.Appointment;

import java.util.List;

public interface AppointmentService {

    Appointment saveAppointment(AppointmentRequest request);

    List<Appointment> getAllAppointments();

    Appointment updateAppointment(Long id, AppointmentRequest request);

    void deleteAppointment(Long id);
}