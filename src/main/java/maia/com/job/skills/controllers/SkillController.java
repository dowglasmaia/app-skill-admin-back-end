package maia.com.job.skills.controllers;

import maia.com.job.skills.domain.skill.dto.SkillRequest;
import maia.com.job.skills.domain.skill.dto.SkillRequestUpdate;
import maia.com.job.skills.domain.skill.dto.SkillResponse;
import maia.com.job.skills.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping
    public ResponseEntity<List<SkillResponse>> getAll() {
        var response = skillService.getAll();
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody SkillRequest request) {
        skillService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<SkillResponse> update(@RequestBody SkillRequestUpdate request) {
        var response = skillService.update(request);
        return ResponseEntity.ok(response);
    }


}
