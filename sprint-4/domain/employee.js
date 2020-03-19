class Employee {
    constructor(employee_id) {
        this.employee_id = employee_id;
        this.status = "rest";
        this.burgers_in_charge = [];
    }

    isWorking() {
        if (this.status == "working")
            return true;
        return false;
    }

    setStatus() {
        if (this.status === "rest") {
            this.status = "working";
            console.log(`Employee${this.employee_id}: rest => working`);
            return;
        }
        if (this.status === "working") {
            this.status = "rest"
            console.log(`Employee${this.employee_id}: working => rest`);
            return;
        }
    }

    work(burger, timeout) {
        // timeout = timeout * 1000;
        this.setStatus();

        console.log("work 실행, burger:", burger, "timeout", timeout);

        return new Promise((res, rej) => {
            // console.log("promise실행");
            setTimeout(() => {
                console.log(`Employee${this.employee_id}: ${burger}를 완성하였습니다.`);
                this.setStatus();
                console.log("setTimeout안의 burger", burger)
                res(burger);
            }, timeout);
        });;
    }
}

module.exports = Employee;