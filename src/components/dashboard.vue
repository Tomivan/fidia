<template>
    <div class="dashboard">
        <nav>
            <div className="heading">
                <img src="../assets/Store.png" alt="home-icon" class="icon" />
                <h4>Store name</h4>
            </div>
            <div class="nav-element"><img src="../assets/Home.png" alt="home-icon" class="icon" />Home</div>
            <div class="nav-element">
               <p><img src="../assets/payment.png" alt="home-icon" class="icon" /> Payments</p>
               <div class="payment">
                   <p>Reviews</p>
                   <p>Disputes</p>
                   <p>Top-ups</p>
                   <p>Collected fees</p>
                   <p>Transfers</p>
                   <p>Payouts</p>
                   <p>All Transactions</p>
               </div>
            </div>
            <div class="nav-element"><img src="../assets/balances.svg" alt="home-icon" class="icon" />Balances</div>
            <div class="nav-element"><img src="../assets/customer.svg" alt="home-icon" class="icon" />Customers</div>
            <div class="nav-element"><img src="../assets/accounts.svg" alt="home-icon" class="icon" />Connected accounts</div>
            <div class="nav-element"><img src="../assets/product.png" alt="home-icon" class="icon" />Products</div>
            <div class="nav-element"><img src="../assets/report.png" alt="home-icon" class="icon" />Reports</div>
            <div class="nav-element"><img src="../assets/developers.png" alt="home-icon" class="icon" />Developers</div>
            <div class="nav-element"><img src="../assets/view.png" alt="home-icon" class="icon" />View data test</div>
            <div class="nav-element"><img src="../assets/settings.svg" alt="home-icon" class="icon" />Settings</div>
        </nav>
        <main class="main">
            <div class="input">
                <div class="left">
                    <img src="../assets/search.svg" alt="home-icon" class="icon" />
                    <input type="text" placeholder="Search">
                </div>
                <div class="right">
                    <img src="../assets/notification.svg" alt="home-icon" class="icon" />
                    <img src="../assets/faq.png" alt="home-icon" class="icon" />
                    <img src="../assets/user.svg" alt="home-icon" class="icon" />
                </div>
            </div>
            <section class="section">
                <div class="section-top">
                    <h2>Payments</h2>
                    <div class="buttons">
                        <button class="filter"><img src="../assets/filter.svg" alt="home-icon" class="icon" />Filter</button>
                        <button class="export"><img src="../assets/export.svg" alt="home-icon" class="icon" />Export</button>
                        <button class="create"><img src="../assets/add.png" alt="home-icon" class="icon" />Create Payment</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></th>
                            <th>Amount</th>
                            <th></th>
                            <th>Description</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$352.22</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>fe3d8216-58f9-4dc1-aaef-2f19463b5258</td>
                            <td>hefovo87@ereyemind...</td>
                            <td>7 Jul, 14:04</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$39.99</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>0d7b6ac7-dbda-4157-bae9-e64749e538f5</td>
                            <td>john.doe@gmail.com</td>
                            <td>7 Jul, 14:01</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$19.99</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>eca84b25-0324-4f31-b9fb-d489048b77ae</td>
                            <td>jfamosinhoaraca@iseo...</td>
                            <td>7 Jul,13:28</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                         <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$19.99</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>9ce0027a-2429-40aa-bca3-eb9fae9829db</td>
                            <td>gdontdisable@typery...</td>
                            <td>7 Jul,13:02</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                         <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$142.17</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>73bb0713-d326-4983-a805-9cef0f15ff3c</td>
                            <td>psir@typre.com</td>
                            <td>7 Jul,12:34</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$93.76</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>dff08e3b-037e-4fc9-a587-92850d82868e</td>
                            <td>qomarkhalildubai0@g...</td>
                            <td>7 Jul, 12:16</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$931.00</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>3005be4a-6d4d-487c-85c3-d61cfe64ef63</td>
                            <td>kfouzan.saleemc@yah...</td>
                            <td>7 Jul,11:31</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$19.99</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>5a9aae47-1d6a-484e-8305-c75107796cd1</td>
                            <td>7lucyveenstra918@g...</td>
                            <td>7 Jul,11:18</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>$41.99</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>48eb8b41-9ff0-4d5d-82cc-4b9b820b5f53</td>
                            <td>0sajad@yopmail.com</td>
                            <td>7 Jul,10:46</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$179.98</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>5a9aae47-1d6a-484e-8305-c75107796cd1</td>
                            <td>7lucyveenstra918@g...</td>
                            <td>7 Jul, 10:12</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$15.17</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>48eb8b41-9ff0-4d5d-82cc-4b9b820b5f53</td>
                            <td>0sajad@yopmail.com</td>
                            <td>7 Jul,06:03</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$41.99</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>02fd1b96-0bba-48aa-8557-81021755b196</td>
                            <td>feverton78@gmail.com</td>
                            <td>6 Jul, 23:45</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$67.83</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>986bdfca-6c8d-4f40-b2ae-ed0abacccfce</td>
                            <td>lsid.ali_blidi@outlook...</td>
                            <td>6 Jul,23:32</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$35.01</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>c5629140-ea34-40d8-97e4-d2986b33275e</td>
                            <td>twendel.b@yahoo.com</td>
                            <td>6 Jul,23:30</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$374.93</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>c2194818-1485-437c-a389-6164e605d697</td>
                            <td>pdevonneq@gmail.com</td>
                            <td>6 Jul,23:16</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                        <tr>
                            <td><img src="../assets/Checkbox.svg" alt="home-icon" class="icon" /></td>
                            <td>US$330.19</td>
                            <td><span><img src="../assets/mark.svg" alt="home-icon" class="icon" />succeeded</span></td>
                            <td>6583691d-4d9f-43ce-8f2f-0d2d95b30ad4</td>
                            <td>atotspop886@gmx.com</td>
                            <td>6 Jul,23:06</td>
                            <td><img src="../assets/more.svg" alt="home-icon" class="icon" /></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <div class=footer>
                <p>16 results</p>
                <div class="page">
                    <button class="previous">Previous</button>
                    <button class="next">Next</button>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.dashboard{
    display: flex;
}
nav{
    background: #f7fafc;
    padding: 1em;
    width: 15vw;
    height: 95vh;
    border-right: 1px solid #ddd;
}
.nav-element{
    padding-bottom: 0.7em;
}
.payment p{
    margin-left: 14%;
}
.heading{
    display: flex;
}
.heading h4{
    margin-top: -1%;
}
.icon{
    height: 2.5vh;
    margin-right: 5%;
}
.main{
    width: 85%;
    margin-left: 2%;
}
.input, .left, .right, .section-top, .buttons, .footer{
    display: flex;
    justify-content: space-between;
}
.input{
    padding: 1em;
    height: 2vh;
    border-bottom: 1px solid #ccc;
}
input{
    border: none;
}
.buttons{
    margin-top: 2%;
}
.filter, .export{
    background: #fff;
    height: 4vh;
    width: 6vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 2%;
}
.create{
    height: 4vh;
    width: 12vw;
    color: #fff;
    background: #5469d4;
    border: none;
    border-radius: 5px;
}
table{
    width: 100%;
}
th{
    text-align: left;
}
th, td{
    border-bottom: 1px solid #ccc;
    padding: 0.2em;
}
.page{
    margin-top: 1%;
    display: flex;
}
.previous, .next{
    background: #fff;
    height: 4vh;
    width: 6vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 2%;
}
span{
    background: #cbf4c9;
    padding: 0.2em;
}
</style>