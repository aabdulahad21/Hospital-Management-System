package com.healthcareapp.dto;

public class DashboardResponse {

    private long totalPatients;
    private long totalDoctors;
    private long totalAppointments;
    private long totalMedicines;

    public DashboardResponse() {
    }

    public DashboardResponse(long totalPatients,
                             long totalDoctors,
                             long totalAppointments,
                             long totalMedicines) {

        this.totalPatients = totalPatients;
        this.totalDoctors = totalDoctors;
        this.totalAppointments = totalAppointments;
        this.totalMedicines = totalMedicines;
    }

    public long getTotalPatients() {
        return totalPatients;
    }

    public void setTotalPatients(long totalPatients) {
        this.totalPatients = totalPatients;
    }

    public long getTotalDoctors() {
        return totalDoctors;
    }

    public void setTotalDoctors(long totalDoctors) {
        this.totalDoctors = totalDoctors;
    }

    public long getTotalAppointments() {
        return totalAppointments;
    }

    public void setTotalAppointments(long totalAppointments) {
        this.totalAppointments = totalAppointments;
    }

    public long getTotalMedicines() {
        return totalMedicines;
    }

    public void setTotalMedicines(long totalMedicines) {
        this.totalMedicines = totalMedicines;
    }
}