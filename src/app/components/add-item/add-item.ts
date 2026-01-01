import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddItemService} from '../../services/add-item';
import {rarityList, typeList} from '../../libs/const';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    ReactiveFormsModule, NgForOf, NgIf
  ],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {

  private addItemService = inject(AddItemService)

  addItemForm = new FormGroup({
    name : new FormControl('', [Validators.required, ]),
    description : new FormControl('', [Validators.required, ]),
    type : new FormControl('', [Validators.required, ]),
    rarity : new FormControl('', [Validators.required, ]),
    icon : new FormControl<File|null>(null, [Validators.required, ]),
    buyPrice : new FormControl('', [Validators.required, ]),
    sellPrice : new FormControl('', [Validators.required, ]),
    damage : new FormControl('', [Validators.required, ]),
    defense : new FormControl('', [Validators.required, ]),
    attackSpeed : new FormControl('', [Validators.required, ]),
    healAmount : new FormControl('', [Validators.required, ])
  })
  isLoading = signal(false);
  handleAddItem(event: Event) {
    this.isLoading.set(true);
    const fileInput = (event.target as HTMLFormElement).querySelector<HTMLInputElement>('#icon');
    const file = fileInput?.files?.[0];
    const formData = new FormData();
    formData.append('icon', file as Blob);
    formData.append('data', new Blob([JSON.stringify(this.addItemForm.value)], { type: 'application/json' }));
    this.addItemService.addItem(formData).subscribe(res => {
      console.log(res);
      this.isLoading.set(false);
    })
  }

  protected readonly typeList = typeList;
  protected readonly rarityList = rarityList;
}
