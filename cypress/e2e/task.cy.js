import MainPage from "../pages/mainPage";
describe("Task Management", () => {
    beforeEach(() => {
        MainPage.visit();
    });

    it("should create a new task", () => {
        MainPage.categoriesMenu().click();
        MainPage.computerAndAccessoriesLink().should('be.visible');
        MainPage.computerAndAccessoriesLink().click();
        MainPage.computerAndAccessoriesLink().should('be.visible');
        MainPage.printersAndScannersLink().click();
        MainPage.epsonBrandFilter().click();

        cy.get('[role="listitem"]').then(($elements) => {
            const count = $elements.length;
            cy.log(`Found ${count} elements with aria-label="some-label"`);
            // Assert the count:
            expect($elements).to.have.length(count);
        });
    });
    it.only("should create a new task", () => {
        MainPage.todayDealLink().click();
        MainPage.seeMoreDepartmentsLink().click();
        MainPage.softWareDepartmentLink().click();
        MainPage.selectedDepartmentText().should('be.visible');
        MainPage.selectedDepartmentText().should('text', 'Software');
    });
})