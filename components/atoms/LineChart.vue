<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(154, 70, 227, 0.5)");
    this.gradient.addColorStop(1, "rgba(214, 172, 232, 0)");

    this.renderChart(
      {
        labels: [
          "3:00 AM",
          "6:00 AM",
          "9:00 AM",
          "12:00 AM",
          "3:00 PM",
          "6:00 AM",
          "9:00 AM",
        ],
        datasets: [
          {
            fill: {
              target: "origin",
              below: "rgba(130, 36, 227, 0.4)",
            },
            label: "$Sugar Price",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: this.gradient,
            borderColor: "rgba(130, 36, 227, 0.4)",
            pointBackgroundColor: "rgba(130, 36, 227, 1)",
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Sugarland Chart",
        },
      }
    );
  },
};
</script>