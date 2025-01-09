import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from 'express';
import { FormStructureService } from '../../../services/formStructure/form-structure.service';

@Component({
  selector: 'app-reactiveform-structure',
  templateUrl: './reactiveform-structure.component.html',
  styleUrl: './reactiveform-structure.component.css'
})
export class ReactiveformStructureComponent {
  isChecked: boolean = false;
  @Output() closeVendor = new EventEmitter<boolean>();
  @Input() transactionData: any;
  isSave = true;
  // isEdit = true;
  isSaveIcon = true;
  deleteVendor: any;
  isDelete: boolean = false;
  _BranchName: any;
  isPincodeSelected: boolean = false;
  noPincode: boolean = false;
  pincodeList: any[] = [];
  cityDropDownOptions: any;

  transactionList: any;

  private productService = inject(FormStructureService);

  TransactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
  ) {
    this.TransactionForm = this.fb.group({
      prdtrnsCode: [],
      inwardFromCode: [],
      transType: [],
      tranRefNo: [],
      totalPrice: [],
      tranUpdBy: [],
      tranUpdOn: [],
      
      branchDto: this.fb.group({
        branchName: [],
        add1: [],
        add2: [],
        city: [],
        state: [],
        pinCode: [],
        gstNumber: [],
        manager: [],
        branchMobilenumber: []
      }),
      vendorDto: this.fb.group({
        branchName: [],
        add1: [],
        add2: [],
        city: [],
        state: [],
        pinCode: [],
        gstNumber: [],
        manager: [],
        branchMobilenumber: []
      }),
      transPrdDetails: this.fb.array([this.showTransactionDetails()]),
    });
  }

  showTransactionDetails(){
    return this.fb.group({
      transProductData: this.fb.group({
        prdmdlName: [],
        prdDescription: [],
        prdCode: [],
        prdHsnCode: [],
        prdbrndName: [],
        prdgrpName: [],
        prdcatgName: [],
        headOfAccName: []
      }),
      prdUnit: [],
      totalPieces: [],
      prdQty: [],
      purchasedPrice: [],
      gstPercentage: [],
      itemTotalPrice: [],
      updatedBy: [],
      updateOn: [],
    })
  }

  ngOnInit(): void {
    // this.getBranchName();
    this.TransactionForm.patchValue(this.transactionData);  
    console.log("this.transactionData:", this.transactionData);
    Object.keys(this.TransactionForm.controls).forEach((form) => {
      this.TransactionForm.get(form)?.disable();
    });

    // *****i comment it out for not properly injecting the product service*****

    // this.productService.productTransaction(this.transactionData.prdtrnsCode).subscribe(
    //   (res) =>{
    //     console.log("fetching transaction details:", res);
    //     this.transactionList = res;
    //   },
    //   (error) => {
    //     console.log("error while fetching transaction details:", error);
    //   }
    // )

  }

  get transactionDetails() {
    return this.TransactionForm.get('transPrdDetails') as FormArray;
  }

  edit() {
    Object.keys(this.TransactionForm.controls).forEach((form) => {
      this.TransactionForm.get(form)?.enable();
    });
    this.isSave = true;
    // this.isEdit = false;
  }

  acceptTransactionDetails(code: any){
    
  }

  // updateVendorDetails(data: any) {
  //   console.log(data);
  //   let id = this.TransactionForm.get('vendorId')?.value;
  //   console.log(id);

  //   this.vendorService.updateVendor(id, data).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (error) => {
  //       console.log(error);
  //       if (error.status == 200) {
  //         this.route.navigate(['/home/vendorList']);
  //       }
  //     },
  //   );
  // }
 
}
