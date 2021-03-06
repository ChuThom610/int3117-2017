/**
 * pass
 * TC Nhap du lieu Tieng Viet co dau trong Textarea
 * 
 * co textarea
 * admin_agency_10@gmail.com
 * doctor_10@gmail.com
 *
 * khong co textarea
 * nurse_10@gmail.com
 * admin_10@gmail.com
 * storekeeper_10@gmail.com
 */
const delay = 2000 // 3second delay trang mang lag
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const rand = getRandomInt(1, 99)
const rand2 = getRandomInt(1, 5)

const str = `Bỗng Những cơn gió lặng mình vào màn đêm xanh thẫm ${rand}`

describe(`Kiem tra textarea`, function() {
    it('Login ...', function() {
        cy.visit('/signin');
        cy.fixture('users').then(users => {
            cy.doLoginAs(users.agency);
        })
        cy.visit('/main/patients')
    })

    describe('Quan Ly Benh Nhan', function() {

        it('Click Thêm don thuoc', function() {
            cy.wait(delay)
            cy.get('.actions.ng-scope a:nth-child(1)').click()
        })

        it('Them thong tin thuoc', function() {
            cy.wait(delay)
            cy.get('div[name=medicine_list_id]').click()
            cy.get('#ui-select-choices-row-14-1').click()

            cy.get('input[name=dosage]').type(`${100 - rand}`)
            cy.get('input[name=duration]').type(`${rand2}`)

            cy.get('textarea[name=description]').type(str)
        })
        it('Submit', function() {
            cy.get('.modal-footer button[type=submit]').first().click()
        })
    })

    describe('Kiểm tra phần hiển thị của text trên view', function() {
        it('Click hien view', function() {
            cy.wait(delay)
            cy.get('.nav.navbar-tabs li:nth-child(3)').click()
            cy.wait(delay)
            cy.get('.table-bordered tbody > tr td:nth-child(8) a').first().click()
        })
        it('Hiển thị giống chuỗi ban đầu', function() {
            cy.wait(delay)
            expect(Cypress.$('pre').text()).to.equal(str);
        })
    })
})

describe('Kiem tra textarea', function () {
    it('Login ...', function() {
        cy.visit('/signin');
        cy.fixture('users').then(users => {
            cy.doLoginAs(users.doctor);
        })
        cy.visit('/main/patients')
    })

    describe('Quan Ly Benh Nhan', function () {
        it('Click Thêm don thuoc', function() {
            cy.wait(delay)
            cy.get('.actions.ng-scope a:nth-child(1)').click()
        })
        it('Them thong tin thuoc', function() {
            cy.wait(delay)
            cy.get('div[name=medicine_list_id]').click()
            cy.get('#ui-select-choices-row-14-1').click()

            cy.get('input[name=dosage]').type(`${100 - rand}`)
            cy.get('input[name=duration]').type(`${rand2}`)

            cy.get('textarea[name=description]').type(str)
        })
        it('Submit', function() {
            cy.get('.modal-footer button[type=submit]').first().click()
        })
    })

    describe('Kiểm tra phần hiển thị của text trên view', function() {
        it('Click hien view', function() {
            cy.wait(delay)
            cy.get('.nav.navbar-tabs li:nth-child(3)').click()
            cy.wait(delay)
            cy.get('.table-bordered tbody > tr td:nth-child(8) a').first().click()
        })
        it('Hiển thị giống chuỗi ban đầu', function() {
            cy.wait(delay)
            expect(Cypress.$('pre').text()).to.equal(str);
        })
    })
})