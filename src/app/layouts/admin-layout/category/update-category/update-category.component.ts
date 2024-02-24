import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from 'src/app/__services/category.service';
import Swal from 'sweetalert2';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  @Input() id!: number;
  @Input() category!: Category;
  updateForm!: FormGroup;

  constructor(public activeModal: NgbActiveModal, private categoryService: CategoryService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: [this.category.name, Validators.required],
      description: [this.category.description, Validators.required],
    });
  }
  updateCategorie() {
    if (this.updateForm.valid) {
      const updatedCategory: Category = this.updateForm.value;
      this.categoryService.updateCategorie(this.id, updatedCategory).subscribe(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Category updated successfully!',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true
        });
        this.activeModal.close('Close');
      }, error => {
        console.error('Error updating Category:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update category.',
          icon: 'error',
          timer: 1500,
          timerProgressBar: true
        });
      });
    } else {
      console.error('Form is invalid');
    }
  }}