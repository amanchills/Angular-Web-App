
  <c-carousel [dark]="true" [wrap]="true" style="display: flex;">
  <c-carousel-indicators></c-carousel-indicators>

  <!-- -------1 --------------------------->
  <c-carousel-inner style="height:400px ; width: 350px; ;">
    <br><br>
    <c-carousel-item *ngFor="let slide of slides; index as i;">

      <section style="padding:2%; display: flex; justify-content: space-around;">


        <mat-card *ngIf="i==0" [class]="cardClass" (mouseenter)="call()" (mouseleave)="leave()">

          <img mat-card-image src="./assets/img2.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover">
          <img class="img1" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover">
          <mat-card-content *ngIf="isHover">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>

        <mat-card *ngIf="i==1" [class]="cardClass2" (mouseenter)="call2()" (mouseleave)="leave2()">

          <img mat-card-image src="./assets/aws.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover2">
          <img class="img2" mat-card-image src="./assets/aws2.png" alt="Photo of a Shiba Inu" *ngIf="isHover2">
          <mat-card-content *ngIf="isHover2">
            <p>
              The AWS Partner Network (APN) is a global community of partners that leverages programs, expertise, and
              resources to build, market, and sell customer offerings.
              <a>https://aws.amazon.com/partners/</a>

            </p>
          </mat-card-content>

        </mat-card>
        <mat-card *ngIf="i==2 " [class]="cardClass3" (mouseenter)="call3()" (mouseleave)="leave3()">

          <img mat-card-image src="./assets/img2.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover3">
          <img class="img3" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover3">
          <mat-card-content *ngIf="isHover3">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>
        <mat-card *ngIf="i==3 " [class]="cardClass4" (mouseenter)="call4()" (mouseleave)="leave4()">

          <img mat-card-image src="./assets/img1.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover4">
          <img class="img4" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover4">
          <mat-card-content *ngIf="isHover4">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>
      </section>


    </c-carousel-item>
  </c-carousel-inner>
  <!-- -------2---------------------------------------------- -->
  <c-carousel-inner style="height:400px ; width: 350px; ;">
    <br><br>
    <c-carousel-item *ngFor="let slide of slides; index as i;">

      <section style="padding:2%; display: flex; justify-content: space-around;">



        <mat-card *ngIf="i==0" [class]="cardClass2" (mouseenter)="call2()" (mouseleave)="leave2()">

          <img mat-card-image src="./assets/aws.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover2">
          <img class="img2" mat-card-image src="./assets/aws2.png" alt="Photo of a Shiba Inu" *ngIf="isHover2">
          <mat-card-content *ngIf="isHover2">
            <p>
              The AWS Partner Network (APN) is a global community of partners that leverages programs, expertise, and
              resources to build, market, and sell customer offerings.
              <a>https://aws.amazon.com/partners/</a>

            </p>
          </mat-card-content>

        </mat-card>
        <mat-card *ngIf="i==1 " [class]="cardClass3" (mouseenter)="call3()" (mouseleave)="leave3()">

          <img mat-card-image src="./assets/img2.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover3">
          <img class="img3" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover3">
          <mat-card-content *ngIf="isHover3">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>
        <mat-card *ngIf="i==2 " [class]="cardClass4" (mouseenter)="call4()" (mouseleave)="leave4()">

          <img mat-card-image src="./assets/img1.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover4">
          <img class="img4" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover4">
          <mat-card-content *ngIf="isHover4">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>

        <mat-card *ngIf="i==3" [class]="cardClass" (mouseenter)="call()" (mouseleave)="leave()">

          <img mat-card-image src="./assets/img2.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover">
          <img class="img1" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover">
          <mat-card-content *ngIf="isHover">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>
      </section>


    </c-carousel-item>
  </c-carousel-inner>
  <!-- -------3---------------------------------------------- -->
  <c-carousel-inner style="height:400px ; width: 350px; ;">
    <br><br>
    <c-carousel-item *ngFor="let slide of slides; index as i;">

      <section style="padding:2%; display: flex; justify-content: space-around;">



        <mat-card *ngIf="i==0 " [class]="cardClass3" (mouseenter)="call3()" (mouseleave)="leave3()">

          <img mat-card-image src="./assets/img2.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover3">
          <img class="img3" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover3">
          <mat-card-content *ngIf="isHover3">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>
        <mat-card *ngIf="i==1 " [class]="cardClass4" (mouseenter)="call4()" (mouseleave)="leave4()">

          <img mat-card-image src="./assets/img1.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover4">
          <img class="img4" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover4">
          <mat-card-content *ngIf="isHover4">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>

        <mat-card *ngIf="i==2" [class]="cardClass" (mouseenter)="call()" (mouseleave)="leave()">

          <img mat-card-image src="./assets/img2.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover">
          <img class="img1" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover">
          <mat-card-content *ngIf="isHover">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>

        <mat-card *ngIf="i==3" [class]="cardClass2" (mouseenter)="call2()" (mouseleave)="leave2()">

          <img mat-card-image src="./assets/aws.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover2">
          <img class="img2" mat-card-image src="./assets/aws2.png" alt="Photo of a Shiba Inu" *ngIf="isHover2">
          <mat-card-content *ngIf="isHover2">
            <p>
              The AWS Partner Network (APN) is a global community of partners that leverages programs, expertise, and
              resources to build, market, and sell customer offerings.
              <a>https://aws.amazon.com/partners/</a>

            </p>
          </mat-card-content>

        </mat-card>
      </section>


    </c-carousel-item>
  </c-carousel-inner>
  <!-- -------4---------------------------------------------- -->
  <c-carousel-inner style="height:400px ; width: 350px; ;">
    <br><br>
    <c-carousel-item *ngFor="let slide of slides; index as i;">

      <section style="padding:2%; display: flex; justify-content: space-around;">




        <mat-card *ngIf="i==0" [class]="cardClass4" (mouseenter)="call4()" (mouseleave)="leave4()">

          <img mat-card-image src="./assets/img1.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover4">
          <img class="img4" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover4">
          <mat-card-content *ngIf="isHover4">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>

        <mat-card *ngIf="i==1" [class]="cardClass" (mouseenter)="call()" (mouseleave)="leave()">

          <img mat-card-image src="./assets/img2.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover">
          <img class="img1" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover">
          <mat-card-content *ngIf="isHover">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>
        </mat-card>

        <mat-card *ngIf="i==2" [class]="cardClass2" (mouseenter)="call2()" (mouseleave)="leave2()">

          <img mat-card-image src="./assets/aws.jpg" alt="Photo of a Shiba Inu" *ngIf="!isHover2">
          <img class="img2" mat-card-image src="./assets/aws2.png" alt="Photo of a Shiba Inu" *ngIf="isHover2">
          <mat-card-content *ngIf="isHover2">
            <p>
              The AWS Partner Network (APN) is a global community of partners that leverages programs, expertise, and
              resources to build, market, and sell customer offerings.
              <a>https://aws.amazon.com/partners/</a>

            </p>
          </mat-card-content>

        </mat-card>
        <mat-card *ngIf="i==3 " [class]="cardClass3" (mouseenter)="call3()" (mouseleave)="leave3()">

          <img mat-card-image src="./assets/img2.jpeg" alt="Photo of a Shiba Inu" *ngIf="!isHover3">
          <img class="img3" mat-card-image src="./assets/img1.png" alt="Photo of a Shiba Inu" *ngIf="isHover3">
          <mat-card-content *ngIf="isHover3">
            <p>
              For instance, you'll see some content writers create social media copy for small businesses, while
              others
              write press materials for insurance brands.

              You'll also find that some content writers write long-form Contact No- 267628678967
            </p>
          </mat-card-content>

        </mat-card>
      </section>


    </c-carousel-item>
  </c-carousel-inner>
  <!-- <c-carousel-control [routerLink] caption="Previous" direction="prev"></c-carousel-control>
<c-carousel-control [routerLink] caption="Next" direction="next"></c-carousel-control> -->
</c-carousel>

