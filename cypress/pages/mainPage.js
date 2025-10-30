const loctors = {
    visit: 'https://www.amazon.ae/',
    categoriesMenu: 'a#nav-hamburger-menu',
    computerAndAccessoriesLink: 'Computers & Office Supplies',
    printersAndScannersLink: 'Printers & Ink',
    epsonBrandFilter: 'Epson',
    todayDealLink: '[href="/deals?ref_=nav_cs_gb"]',
    seeMoreDepartmentsLink: '#departments + div + span + button',
    softWareDepartmentLink: 'Software',
    selectedDepartmentText: '[data-csa-c-element-id="filter-departments-15150465031"] span[style]'
}

class MainPage {


    visit() {
        return cy.visit(loctors.visit);

    }
    categoriesMenu() {
        return cy.get(loctors.categoriesMenu);
    }
    computerAndAccessoriesLink() {
        return cy.contains(loctors.computerAndAccessoriesLink);
    }
    printersAndScannersLink() {
        return cy.contains(loctors.printersAndScannersLink);
    }
    epsonBrandFilter() {
        return cy.contains(loctors.epsonBrandFilter);
    }
    todayDealLink() {
        return cy.get(loctors.todayDealLink);
    }
    seeMoreDepartmentsLink() {
        return cy.get(loctors.seeMoreDepartmentsLink);
    }
    softWareDepartmentLink() {
        return cy.contains(loctors.softWareDepartmentLink);
    }
    selectedDepartmentText() {
        return cy.get(loctors.selectedDepartmentText);
    }
}

export default new MainPage();
