class EvaluationRecord {
    _id;
    salesmanId;
    year;
    orderEvaluations;
    socialPerformanceEvaluations;
    remarks;
    constructor(_id, salesmanId, year, orderEvaluations, socialPerformanceEvaluations, remarks) {
        this._id = _id;
        this.salesmanId = salesmanId;
        this.year = year;
        this.orderEvaluations = orderEvaluations;
        this.socialPerformanceEvaluations = socialPerformanceEvaluations;
        this.remarks = remarks;
    }
}