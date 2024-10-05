const dashboards = [
    {
        title: "Sales Dashboard",
        imgSrc: "images/dashboards/imagem1.png",
        altText: "Power BI Sales Dashboard",
        description: "An exclusive dashboard was created for the sales team, aiming to provide deeper insights into sales compared to set goals and monitor performance in real time.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiMTRkYmZiZDctZTY2NC00YjU3LThjNjQtYzkxOTJlYTQ5NGZjIiwidCI6IjNkNmFmZTZiLTVlN2ItNGRkYy1iYzljLTliM2I2OGVjZWFjMCJ9"
    },
    {
        title: "NPS Dashboard",
        imgSrc: "images/dashboards/imagem2.png",
        altText: "Power BI NPS Dashboard",
        description: "A dashboard was built to track NPS and Net Worth, aiming to evaluate key indicators of an investment firm and measure customer satisfaction and total net worth.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiNWI2YjZlZWYtZmEwOS00MGFiLTliNWMtZTdlMjU3Yjk4N2M1IiwidCI6IjNkNmFmZTZiLTVlN2ItNGRkYy1iYzljLTliM2I2OGVjZWFjMCJ9"
    },
    {
        title: "Leads Dashboard",
        imgSrc: "images/dashboards/imagem3.png",
        altText: "Power BI Leads Dashboard",
        description: "This dashboard was designed to study lead generation in an education network, split into two tabs: one showing lead sources and another focusing on lead characteristics.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiODM1MTM0ZjEtZGQwZC00MDlmLTg1YmEtYTExN2U1YWE4Yzk4IiwidCI6IjNkNmFmZTZiLTVlN2ItNGRkYy1iYzljLTliM2I2OGVjZWFjMCJ9"
    },
    {
        title: "Purchasing Dashboard",
        imgSrc: "images/dashboards/imagem4.png",
        altText: "Power BI Purchasing Dashboard",
        description: "A custom dashboard was created for the purchasing department to improve understanding of the relationship between purchases and receipts.",
        link: "https://www.google.com/url?q=https%3A%2F%2Fapp.powerbi.com%2Fview%3Fr%3DeyJrIjoiZDNmZGVkZGItNDJmNC00NjA1LTk5MTgtODU4MTA5N2I1ODAyIiwidCI6IjNkNmFmZTZiLTVlN2ItNGRkYy1iYzljLTliM2I2OGVjZWFjMCJ9&sa=D&sntz=1&usg=AOvVaw3P1EYKear7bwl4pKEEmoHA"
    },
    {
        title: "HR Dashboard",
        imgSrc: "images/dashboards/imagem5.png",
        altText: "Power BI HR Dashboard",
        description: "A dashboard was created for HR to give clearer insights into employee numbers and turnover. All indicators are explained and can be accessed to view the current scenario.",
        link: "https://www.google.com/url?q=https%3A%2F%2Fapp.powerbi.com%2Fview%3Fr%3DeyJrIjoiMDIyMDcyY2YtYzkxNC00NTljLWI0YmQtZDE4MzBiNWIxNDc2IiwidCI6IjNkNmFmZTZiLTVlN2ItNGRkYy1iYzljLTliM2I2OGVjZWFjMCJ9&sa=D&sntz=1&usg=AOvVaw3ntzi_SE6NhsP6Y_RxcVRo"
    },
    {
        title: "Games Dashboard",
        imgSrc: "images/dashboards/imagem6.png",
        altText: "Power BI Company Dashboard",
        description: "This is my first dashboard, developed while I was still in IT school. Through it, I explored various elements of Power BI and Figma for the first time.",
        link: "https://app.powerbi.com/view?r=eyJrIjoiMDQ0OGIyZTgtZjI1ZC00NmIzLThmMzgtYTU4MDljM2FjYmEwIiwidCI6IjNkNmFmZTZiLTVlN2ItNGRkYy1iYzljLTliM2I2OGVjZWFjMCJ9"
    }
    
];


function setModalContent(title, iframeUrl) {
document.getElementById('genericModalLabel').innerText = title;
document.querySelector('#genericModal .modal-body').innerHTML = 
`
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe src="${iframeUrl}" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>`;
}


const dashboardContainer = document.getElementById("dashboardCards");

dashboards.forEach(dashboard => {
const cardHtml = `
<div class="col">
<div class="card shadow-sm">
<img class="img-fluid" src="${dashboard.imgSrc}" alt="${dashboard.altText}" />
<div class="card-body">
<p class="card-text">${dashboard.description}</p>
<div class="d-flex justify-content-between align-items-center">
<div class="btn-group">
    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#genericModal" onclick="setModalContent('${dashboard.title}', '${dashboard.link}')">View</button>
</div>
</div>
</div>
</div>
</div>`;

dashboardContainer.insertAdjacentHTML('beforeend', cardHtml);
});




