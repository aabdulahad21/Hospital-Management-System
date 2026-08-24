package com.healthcareapp.service;

import com.healthcareapp.entity.Medicine;

import java.util.List;

public interface MedicineService {

    Medicine saveMedicine(Medicine medicine);

    List<Medicine> getAllMedicines();

    Medicine updateMedicine(Long id, Medicine medicine);

    void deleteMedicine(Long id);
}