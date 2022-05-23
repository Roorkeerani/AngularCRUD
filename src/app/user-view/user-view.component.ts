import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userEditFrom: FormGroup;
  currentUserId = 1;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.currentUserId = this.activatedRoute.snapshot.params['id']

    this.userEditFrom = new FormGroup({
      'FirstName': new FormControl(''),
      'LastName': new FormControl(''),
      'Email': new FormControl(''),
      'Salary': new FormControl('')
    });
  }

  ngOnInit(): void {
    let id = this.currentUserId;
    this.getCurrentData(id).subscribe((data) => {
      this.userEditFrom.patchValue(data);
      console.log(data);
    })
  }

  getCurrentData(id = this.currentUserId) {
    return this.http.get(`https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees/${id}`);
  }

  reload($myParam: string = ''): void {
    const navigationDetails: string[] = ['/users'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails)
  }
  putData() {
    //console.log(this.userFrom.value)
    let id = this.currentUserId;
    this.http.put(`https://6285e473f0e8f0bb7c0b4d89.mockapi.io/Employees/${id}`, this.userEditFrom.value).subscribe((_data) => {
      alert('Data Updated successfully');
      this.reload()
    })
  }
}
