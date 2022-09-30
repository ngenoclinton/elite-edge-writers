<template>
  <HeaderView />
  <div class="container">
<div class="banner">
        
    <form action="" class="main-form">
        <div class="col-sl-1">
                <div class="form-title"><span>Quick Order</span></div>
                    <div class="currency-select">
                        <select name="currency" class="select currency">
                            <option value="USD" data-rate="1">USD</option>                   
                            <option value="EUR" data-rate="0.996095">EUR</option>                 
                            <option value="GBP" data-rate="0.863715">GBP</option>                    
                            <option value="AUD" data-rate="1.461425">AUD</option>               
                        </select>
                    </div>
                </div>
        <div class="col-sl-2 ">
            <div class="label">Type of assignment</div>
                <select name="cars" id="cars" class="select select-ast">
                <option value='0-0'>Essay</option>
            <option value='0-1'>Personal Statement</option>
            <option value='1-0'>Term paper</option>
            <option value='1-1'> Coursework</option>
            <option value='1-2'>Research paper</option>
            <option value='1-3'> Research proposal</option>
            <option value='1-4'>Concept Map</option>
            <option value='2-0'>Grant Proposal</option>
            <option value='3-0'>Case Study</option>
            <option value='4-0'> Case Brief</option>
            <option value='5-0'>Discussion Board Post</option>
            <option value='6-0'> Reaction paper</option>
            <option value='6-1'> Response paper</option>
            <option value='6-2'>Literary analysis</option>
            <option value='7-0'> Article Review</option>
            <option value='7-1'> Article Critique</option>
            <option value='7-2'> Movie Review</option>
            <option value='7-3'> Movie Critique</option>
            <option value='8-0'> Book Report</option>
            <option value='8-1'> Book Review</option>
            <option value='9-0'>Synopsis</option>
            <option value='10-0'>Poem</option>
            <option value='11-0'>Letter</option>
            <option value='12-0'> Motivation letter</option>
            <option value='13-0'>Memo</option>
            <option value='14-0'>Scholarship essay</option>
            <option value='15-0'>Article writing</option>
            <option value='16-0'> Blog Article</option>
            <option value='17-0'>Annotated Bibliography</option>
            <option value='18-0'> Literature Review</option>
            <option value='19-0'>Outline</option>
            <option value='20-0'>Online Test</option>
            <option value='21-0'>Questions-Answers</option>
            <option value='22-0'> Multiple Choice Questions</option>
            <option value='23-0'>Interview</option>
            <option value='24-0'>Questionnaire</option>
            <option value='25-0'>Speech</option>
            <option value='26-0'>Dissertation</option>
            <option value='26-1'> Dissertation chapter - Abstract</option>
            <option value='26-2'> Dissertation chapter - Introduction</option>
            <option value='26-3'> Dissertation chapter - Hypothesis</option>
            <option value='26-4'> Dissertation chapter - Literature review</option>
            <option value='26-5'> Dissertation chapter - Methodology</option>
            <option value='26-6'> Dissertation chapter - Results</option>
            <option value='26-7'> Dissertation chapter - Discussion</option>
            <option value='26-8'> Dissertation chapter - Conclusion</option>
            <option value='26-9'>Thesis</option>
            <option value='26-10'> Thesis Proposal</option>
            <option value='26-11'> Thesis/dissertation chapter</option>
            <option value='26-12'>Capstone Project</option>
            <option value='26-13'>IB Extended Essay</option>
            <option value='27-0'>Lab Report</option>
            <option value='27-1'>Business Report</option>
            <option value='27-2'> Business plan</option>
            <option value='27-3'> Marketing Plan</option>
            <option value='27-4'>White paper</option>
            <option value='27-5'>Report Writing</option>
            <option value='28-0'>Formatting</option>
            <option value='29-0'>Editing</option>
            <option value='30-0'> Proofreading</option>
            <option value='31-0'>Rewriting</option>
            <option value='32-0'>Revision</option>
            <option value='33-0'>Powerpoint Presentation</option>
            <option value='34-0'> Powerpoint Presentation Poster</option>
            <option value='34-1'> PDF Poster</option>
            <option value='35-0'>Excel Exercises</option>
            <option value='35-1'>Math Problem</option>
            <option value='36-0'>Reference List</option>
            <option value='37-0'>Problem solving</option>
            <option value='38-0'>Paper Analysis</option>
            <option value='38-1'> Paper Analysis: Article Review</option>
            <option value='38-2'> Paper Analysis: Article Writing</option>
            <option value='38-3'> Paper Analysis: Book Report</option>
            <option value='38-4'> Paper Analysis: Business Report</option>
            <option value='38-5'> Paper Analysis: Case Study</option>
            <option value='38-6'> Paper Analysis: Coursework</option>
            <option value='38-7'> Paper Analysis: Discussion Board Post</option>
            <option value='38-8'> Paper Analysis: Dissertation</option>
            <option value='38-9'> Paper Analysis: Essay</option>
            <option value='38-10'> Paper Analysis: Interview</option>
            <option value='38-11'> Paper Analysis: Movie Review</option>
            <option value='38-12'> Paper Analysis: PowerPoint Presentation</option>
            <option value='38-13'> Paper Analysis: Reaction Paper</option>
            <option value='38-14'> Paper Analysis: Research Paper</option>
            <option value='38-15'> Paper Analysis: Response Paper</option>
            <option value='38-16'> Paper Analysis: Research Proposal</option>
            <option value='38-17'> Paper Analysis: Scholarship Essay</option>
            <option value='38-18'> Paper Analysis: Term Paper</option>
            <option value='38-19'> Paper Analysis: Thesis</option>
            <option value='38-20'> Paper Analysis: Thesis Proposal</option>
                </select>
        </div>
                        
        <div class="col-sl-3">
            <div class="col-wl">
                    <label class="label">Writer Level</label>
                    <select class="select col-x-sl">
                        <option value="0">High School</option>
                            <option value="1">College</option>
                            <option value="2">University</option>
                            <option value="3">Master's</option>
                            <option value="4">PHD</option>
                    </select>
            </div>

                <div class="col-sl-u">
                    <label class="label">Urgency</label>
                    <select class="select col-x-sl" >
                        <option value="777600">9 days</option>
                        <option value="604800">7 days</option>
                        <option value="432000">5 days</option>
                        <option value="345600">4 days</option>
                        <option value="259200">3 days</option>
                        <option value="172800">48 hours</option>
                        <option value="86400">24 hours</option>
                        <option value="43200">12 hours</option>
                        <option value="28800">8 hours</option>
                        <option value="21600">6 hours</option>
                        <option value="10800">3 hours</option>
                    </select>
                </div>
        </div>
                
        <div class="col-sl-4 price-param">
                <label  class="label">Number of  Pages</label>
                <select name="pages" id="" class="select">
                    <option value="1">1 page / 300 words</option>
                        <option value="2">2 pages / 600 words</option>
                        <option value="3">3 pages / 900 words</option>
                        <option value="4">4 pages / 1200 words</option>
                        <option value="5">5 pages / 1500 words</option>
                        <option value="6">6 pages / 1800 words</option>
                        <option value="7">7 pages / 2100 words</option>
                        <option value="8">8 pages / 2400 words</option>
                        <option value="9">9 pages / 2700 words</option>
                        <option value="10">10 pages / 3000 words</option>
                        <option value="11">11 pages / 3300 words</option>
                        <option value="12">12 pages / 3600 words</option>
                        <option value="13">13 pages / 3900 words</option>
                        <option value="14">14 pages / 4200 words</option>
                        <option value="15">15 pages / 4500 words</option>
                        <option value="16">16 pages / 4800 words</option>
                        <option value="17">17 pages / 5100 words</option>
                        <option value="18">18 pages / 5400 words</option>
                        <option value="19">19 pages / 5700 words</option>
                        <option value="20">20 pages / 6000 words</option>
                </select>
        </div>
        <div class="col-sl-5">
            <label  class="label">Select a file:</label>
            <input type="file" name="myfile" class="select col-x-sl">
        </div>
        <div class="col-sl-6">
            <label  class="label">Your Email</label>
            <input type="email">
        </div>
                
    </form>
        <button type="button" class="button">Order Now</button>
 </div>
</div>

  <FooterView />
</template>
<script>
import HeaderView from './HeaderView.vue';
import FooterView from './FooterView.vue';

    export default{
        name: "HomePage",
        components:{
    HeaderView,
    FooterView
}
    }
</script>
<style>
    .container{
        height: fit-content;
        margin-top: 100px;
        background-image: url('https://ok6static.oktacdn.com/fs/bco/7/fs06su3fd5iKfz1m42p7');
        background-color: transparent;
        background-repeat: no-repeat;
        object-fit:scale-down;
        background-size: cover;
        /* background-position: center;   */
        background-position: 50% 50%;
    }
    .banner{
    background-color: #fff;
    /* opacity: .9; */
    box-shadow: 0 0 2px 1px hsla(0, 0%, 68.6%, .3);
    position: relative;
    right: 50px;
    width: 100%;
    width: 400px;
    height:fit-content; 
    min-width: 300px;
    border-radius: 10px;
    margin: 0 auto;
    padding: 20px 10px;
    box-sizing: border-box;
    text-align: center;
    font-weight: lighter;
    line-height: 26px;
    border: 1px solid #d9e0ed;
    border-radius: 4px;
    }
    .col-sl-1,.col-sl-2, .col-sl-3, .lable, .col-sl-4,
    .col-sl-5, .col-sl-6, .col-sl-7, .col-sl-8, .col-{
    position: relative;
    min-height: 1px;
    padding-right: 20px;
    padding-left: 15px;
    }
    .col-sl-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .col-sl-1 .currency{
        position: relative;
        top: 10px;
        right: 5px;
    }
    .main-form .col-sl-1 .form-title{
    font-size: 20px;
    font-family: "Open Sans";
    color: #141414;
    text-align: left;
    display: inline-block;
    line-height: 40px;
    font-weight: 600;
    }
    .col-sl-3 {
    width: 80%;
    display:flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 20px;
    } 
   .col-wl{
     /* width: 30%; */
      flex: 2;
    }
    .col-sl-u{
        flex:2;
        /* width:30%; */
    }
    .label{
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        text-align: left;
        padding: 4px 0;
        line-height: 17px;
        font-family: Open Sans;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: .01em;
        display: block;
        text-align: left;
        font-size: 13px;
        font-family: "Open Sans";
        color: #1e1f25;
        line-height: 2.308;
        font-weight: 400;
        text-align: left;   
        padding: 5px 0 0;
        }
    .select{
    margin: 0;
    border: 1px solid #d9e0ed;
    border-radius: 4px;
    background: #fff8f8!important;
    color: #404750;
    font-size: 13px;
    font-weight: 400;
    display: inline-block;
    height: 40px;
    letter-spacing: .01em;
    color: #404750;
    border-radius: 4px;
    box-shadow: none;
    background-color: #fff;
    border: 1px solid #d9e0ed;
    box-sizing: border-box;
    line-height: 28px;
    width: 100%;
    margin-bottom: 10px;
    padding: 5px 15px;
    width: 100%
     }
     .price-param select[name="pages"] option{
    text-align: center;
    color: #000;
    }
   .col-sl-6{
    display: block;
    margin-right:25px
   }
   .main-form .col-sl-6 input{
    width: 100%;
    padding: 10px;
    border:1px solid #ccc;
   }
   input:focus{
    outline: none;
  }
   .button{
    width: 90%;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    background-color: yellow;
    border: none;
    border-radius: 4px;
  }
</style>