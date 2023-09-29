<template>
  <div class="email-comp-container">
    <div class="email-camp-layout">
      <!-- header section start -->
      <div class="email-camp-header-section">
        <div class="title-section-count">
          {{ `All Campaigns (${24})` }}
        </div>
        <div class="search-add-camp-button-layout">
          <div class="search">
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
                <div class="circular">
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
                </div>
             
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
                  <div class="divider">|</div>
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
                  520 <span class="sent-percentage ">19.6%</span>
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
      padding: 10px 20px;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
      .title-section-count {
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
          height: 36px;
          border-radius: 3px;
          border: 1px solid #e5e7f9;
          background: #fafaff;
        }
        .button-layout {
          cursor: pointer;
          height: 36px;
          border-radius: 3px;
          background: #6e58f1;
          display: flex;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #6e58f1;
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
          padding: 10px;
          gap: 10px;
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
          justify-content: space-between;
          gap: 20px;
          padding: 25px 10px;
          background: #fff;
          box-shadow: 0px 2px 10px 0px rgba(20, 20, 20, 0.05);
          margin-bottom: 3px;
          .row {
            .progress-circle {
            }
            .other-detail-layout {
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
                }
                .divider {
                }
                .sequence {
                }
              }
            }
            .sent {
              .sent-number {
                font-family: DM Sans;
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                .sent-percentage {
                  color: #282b42;
                  font-family: DM Sans;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                }
              }
              .sent-text {
                color: #282b42;
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
            gap:12px;
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
  .row-gap{
    display: flex;
    gap: 20px;
    align-items: center;
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
    background-color: #DDE6F0;
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
    color: #4158D0;
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
    background: #4158D0;
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