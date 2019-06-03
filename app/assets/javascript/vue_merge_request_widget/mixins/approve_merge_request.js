export default {
  computed: {
    isApprovedButtonDisabled() {
        return Boolean(this.mr.currentUserHasApproved || this.mr.mergeStatus != 'can_be_merged');
    },
    approveButtonText() {
        return 'Approve';
    }
  },
  methods: {
    handleApproveButtonClick() {
        this.service.approve()
    }
  }
};