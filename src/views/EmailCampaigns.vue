<template>
  <div class="email-comp-container">
    <div class="email-camp-layout">
      <!-- header section start -->
      <div class="email-camp-header-section">
        <div class="title-section-count">
          <div>
            {{ `All Campaigns (${emailCamsData.length})` }}
          </div>
          <div
            style="width: 39px; height: 4px; border-radius: 10px 10px 0px 0px"
            class="bg-primary"
          ></div>
        </div>
        <div class="search-add-camp-button-layout">
          <div class="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.97968 6.98747C0.97968 3.66946 3.66946 0.97968 6.98747 0.97968C10.3055 0.97968 12.9953 3.66946 12.9953 6.98747C12.9953 10.3055 10.3055 12.9953 6.98747 12.9953C3.66946 12.9953 0.97968 10.3055 0.97968 6.98747ZM6.98747 0C3.1284 0 0 3.1284 0 6.98747C0 10.8465 3.1284 13.9749 6.98747 13.9749C8.74071 13.9749 10.3431 13.3292 11.5699 12.2626L15.1638 15.8565C15.3551 16.0478 15.6652 16.0478 15.8565 15.8565C16.0478 15.6652 16.0478 15.3551 15.8565 15.1638L12.2626 11.5699C13.3292 10.3431 13.9749 8.74071 13.9749 6.98747C13.9749 3.1284 10.8465 0 6.98747 0Z"
                fill="#696D8B"
              />
            </svg>
            <input placeholder="Search Campaigns" />
          </div>
          <div class="button-layout">
            <div class="button">+ Add Campaign</div>
          </div>
        </div>
      </div>
      <!-- header section end -->

      <!-- table section start-->
      <div class="table-container">
        <div class="table-layout">
          <!-- column section start -->
          <div class="table-column">
            <div class="column checkbox">
              <input type="checkbox" />
            </div>
            <div class="column1 column1-width">Campaign Details</div>
            <div class="column2">Report</div>
          </div>
          <!-- column section end -->

          <!-- row section start -->
          <div
            class="_table-row"
            v-for="(data, index) in emailCamsData"
            :key="index"
          >
            <div class="row checkbox">
              <input type="checkbox" />
            </div>
            <div class="row row-gap column1-width">
              <div class="progress-circle">
                <!-- <div class="circular">
                    <div class="inner">
                    </div>
                    <div class="outer">
                    </div>
                    <div class="numb">
                        10%</div>
                    <div class="circle">
                        <div class="dot">
                            <span></span>
                        </div>
                        <div class="bar left">
                            <div class="progress">
                            </div>
                        </div>
                        <div class="bar right">
                            <div class="progress">
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="text">30%</div>
             
              </div>
              <div class="other-detail-layout">
                <div class="clint-name-go-to-button">
                  <div class="clint-name">
                    {{ data.company_detail.client_name }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.57959 8.45363L14.6846 1.34863M14.6846 1.34863H10.8346M14.6846 1.34863V5.12863"
                        stroke="#8284AD"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.7 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V9.335"
                        stroke="#8284AD"
                        stroke-width="1.4"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="go-to-button"></div>
                </div>
                <div class="date-sequence">
                  <div class="green-dot"></div>
                  <div class="sent-on-date">
                    {{
                      `${data.company_detail.status} on ${data.company_detail.date}`
                    }}
                  </div>
                  <div style="color:#999BA8">|</div>
                  <div class="sequence">
                    {{ `${data.company_detail.sequence} Sequence` }}
                  </div>
                </div>
              </div>
            </div>
            <div class="row row2">
              <div class="sent">
                <div class="sent-number text-secondary">520</div>
                <div class="sent-text">Sent</div>
              </div>

              <div class="sent">
                <div class="sent-number text-warning">
                  520 <span class="sent-percentage">19.6%</span>
                </div>
                <div class="sent-text">Clicked</div>
              </div>

              <div class="sent">
                <div class="sent-number text-negative">
                  520 <span class="sent-percentage">19.6%</span>
                </div>
                <div class="sent-text">Opened</div>
              </div>

              <div class="sent">
                <div class="sent-number text-replied">
                  520 <span class="sent-percentage">19.6%</span>
                </div>
                <div class="sent-text">Replied</div>
              </div>

              <div class="sent">
                <div class="sent-number text-positive">
                  520 <span class="sent-percentage">19.6%</span>
                </div>
                <div class="sent-text">Positive Reply</div>
              </div>
            </div>

            <div class="row3">
              <div class="action-button-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <circle cx="9" cy="9" r="8.5" stroke="#696D8B" />
                  <rect
                    x="6.1875"
                    y="5.625"
                    width="1.60714"
                    height="6.75"
                    rx="0.803571"
                    fill="#696D8B"
                  />
                  <rect
                    x="10.2031"
                    y="5.625"
                    width="1.60714"
                    height="6.75"
                    rx="0.803571"
                    fill="#696D8B"
                  />
                </svg>
              </div>

              <div class="action-button-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.3546 2.19467C16.8155 3.40304 17.0054 5.55081 15.7788 6.99185L9.12918 14.8038C9.0838 14.8608 9.02717 14.9094 8.96172 14.946C8.90417 14.9783 8.84187 15.0001 8.77785 15.0111L4.24474 15.9373C4.07367 15.9723 3.89584 15.9281 3.76206 15.8175C3.62828 15.7068 3.55328 15.5418 3.5585 15.3697L3.69518 10.8561C3.6817 10.7118 3.72445 10.5623 3.82648 10.4425L10.4885 2.61595C11.7151 1.17491 13.8938 0.986297 15.3546 2.19467ZM4.83294 11.0109L11.363 3.33935C12.1841 2.37476 13.6424 2.2485 14.6203 3.05735C15.5982 3.8662 15.7253 5.30386 14.9042 6.26846L8.36998 13.9448L4.72152 14.6903L4.83294 11.0109Z"
                    fill="#696D8B"
                  />
                </svg>
              </div>

              <div class="action-button-layout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <circle
                    cx="2.21311"
                    cy="9.41624"
                    r="1.71311"
                    stroke="#696D8B"
                  />
                  <circle
                    cx="8.99436"
                    cy="9.41624"
                    r="1.71311"
                    stroke="#696D8B"
                  />
                  <circle
                    cx="15.7912"
                    cy="9.41624"
                    r="1.71311"
                    stroke="#696D8B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- row section end -->
        </div>
      </div>
      <!-- table section end-->
    </div>
  </div>
</template>
<script lang="js" setup>
import emailCamsData from '@/email-campaign-dummy-data'
console.table(emailCamsData)
</script>
<style lang="scss" scoped>
.email-comp-container {
  display: flex;
  flex-direction: column;
  .email-camp-layout {
    display: flex;
    flex-direction: column;
    .email-camp-header-section {
      display: flex;
      height: 60px;
      //   padding: 10px 20px;
      padding: 0px 20px;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
      box-shadow: 0px 2px 4px 0px rgba(141, 143, 169, 0.1);
      .title-section-count {
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        color: #282b42;
        font-family: DM Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .search-add-camp-button-layout {
        display: flex;
        gap: 29px;

        .search {
          display: flex;
          gap: 7px;
          align-items: center;
          padding: 10px;
          height: 36px;
          width: 264px;
          color: #9699b0;
          font-family: DM Sans;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          border-radius: 3px;
          border: 1px solid #e5e7f9;
          background: #fafaff;
          input {
            background: #fafaff;
            color: #9699b0;
            font-family: DM Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
        .button-layout {
          cursor: pointer;
          height: 36px;
          border-radius: 3px;
          background: #6e58f1;
          display: flex;
          align-items: center;
          padding: 8px 15px;
          &:hover {
            background: #00056a;
          }
          .button {
            color: #fff;
            text-align: center;
            font-family: DM Sans;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
    }
    .table-container {
      // width: 1170px;
      padding: 20px;
      .table-layout {
        display: flex;
        flex-direction: column;
        .table-column {
          display: flex;
          height: 50px;
          background: #e9ebf9;
          align-items: center;
          padding: 10px 20px;
          gap: 45px;
          .column {
          }
          .checkbox {
          }
          .column1 {
            display: flex;
            color: #686b8a;
            font-family: DM Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
          .column1-width {
            width: 400px;
          }
          .column2 {
            color: #686b8a;
            font-family: DM Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
        ._table-row {
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 25px 10px;
          background: #fff;
          box-shadow: 0px 2px 10px 0px rgba(20, 20, 20, 0.05);
          margin-bottom: 3px;
          justify-content: space-around;
          .row {
            .progress-circle {
                width: 41px;
                height: 41px;
                border: 5px solid #E5E8F7;
                border-radius:50px ;
                display: flex;
                justify-content: center;
                align-items: center;
                
                .text{
                    opacity: 0.6;
                    color: #282B42;
                    text-align: center;
                    font-family: DM Sans;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

            }
            .other-detail-layout {
              display: flex;
              flex-direction: column;
              gap: 8px;
              
              .clint-name-go-to-button {
                display: flex;
                .clint-name {
                  display: flex;
                  gap: 12px;
                  align-items: center;
                  color: #6e58f1;
                  font-family: DM Sans;
                  font-size: 15px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: normal;
                }
                .go-to-button {
                }
              }
              .date-sequence {
                display: flex;
                gap: 8px;
                align-items: center;
                .green-dot {
                  height: 6px;
                  width: 6px;
                  border-radius: 50px;
                  background-color: #5eca39;
                }
                .sent-on-date {
                    color: #282B42;
                    font-family: DM Sans;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    opacity: 0.6;
                }
                .divider {
                    color: #282B42;
                    font-family: DM Sans;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    opacity: 0.6;
                }
                .sequence {
                    color: #282B42;
                    font-family: DM Sans;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    opacity: 0.6;
                }
              }
            }
            .sent {
              display: flex;
              flex-direction: column;
              gap: 8px;
              .sent-number {
                display: flex;
                font-family: DM Sans;
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                gap:3px;
                .sent-percentage {
                  color: #999BA8;
                  font-family: DM Sans;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  display: flex;
                flex-direction: column-reverse;
                }
              }
              .sent-text {
                color: #999BA8;
                font-family: DM Sans;
                font-size: 14px;
                text-align: start;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
          }
          .row2 {
            display: flex;
            gap: 47px;
          }
          .row3 {
            display: flex;
            gap: 12px;
            .action-button-layout {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 36px;
              height: 36px;
              border-radius: 3px;
              border: 1px solid #e5e7f9;
              background: #fafaff;
            }
          }
        }
      }
    }
  }
  .row-gap {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 400px;
  }
}
</style>

<style scoped>
.circular {
  height: 100px;
  width: 100px;
  position: relative;
}
.circular .inner,
.circular .outer,
.circular .circle {
  position: absolute;
  z-index: 6;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
}
.circular .inner {
  top: 50%;
  left: 50%;
  height: 80px;
  width: 80px;
  margin: -40px 0 0 -40px;
  background-color: #dde6f0;
  border-radius: 100%;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
}
.circular .circle {
  z-index: 1;
  box-shadow: none;
}
.circular .numb {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 18px;
  font-weight: 500;
  color: #4158d0;
}
.circular .bar {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  -webkit-border-radius: 100%;
  clip: rect(0px, 100px, 100px, 50px);
}
.circle .bar .progress {
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-border-radius: 100%;
  clip: rect(0px, 50px, 100px, 0px);
}
.circle .bar .progress,
.dot span {
  background: #4158d0;
}
.circle .left .progress {
  z-index: 1;
  animation: left 4s linear both;
}
@keyframes left {
  100% {
    transform: rotate(180deg);
  }
}
.circle .right {
  z-index: 3;
  transform: rotate(180deg);
}
.circle .right .progress {
  animation: right 4s linear both;
  animation-delay: 4s;
}
@keyframes right {
  100% {
    transform: rotate(180deg);
  }
}
.circle .dot {
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 10px;
  margin-top: -5px;
  animation: dot 8s linear both;
  transform-origin: 0% 50%;
}
</style>
