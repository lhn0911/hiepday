import EnterpriseLayout from "@/layouts/enterprise/EnterpriseLayout.vue";
import BookingInterview from "@/views/enterprise/BookingInterview.vue";
import JobsEnterprise from "@/views/enterprise/JobsEnterprise.vue";
import ProfileEnterprise from "@/views/enterprise/ProfileEnterprise.vue";
import DashboardEnterprise from "@/views/manager/Dashboard/DashboardEnterprise.vue";
import ProfileManager from "@/views/manager/ProfileManager.vue";

const enterpriseRouters = [
  {
    path: "/enterprise",
    redirect: "enterprise/dashboard",
    component: EnterpriseLayout,
    children: [
      {
        path: "dashboard",
        component: DashboardEnterprise,
        name: "dashboard",
        children: [
          {
            path: "interviews",
            component: BookingInterview,
            name: "interviews",
          }, //doanh
          {
            path: "basic-info",
            component: ProfileEnterprise,
            name: "basic-info",
          },
          {
            path: "jobs",
            component: JobsEnterprise,
            name: "jobs",
          },
        ],
      },
      {
        path: "profile-manager",
        component: ProfileManager,
        name: "profile-manager",
      },
    ],
  },
];

export default enterpriseRouters;
