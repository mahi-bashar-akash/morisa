<template>
    <section class="py-5 w-100">

        <div class="container">

            <!-- customer information -->
            <div class="w-100 mb-4 px-1">

                <div class="fs-4 fw-medium mb-3 d-flex justify-content-start align-items-center">
                    Customer information
                </div>

                <div class="row px-2">
                    <div class="col-12 border border-bottom-0 p-3">
                        <div class="mb-2 fw-medium">
                            Name:
                        </div>
                        <div class="text-secondary">
                            Mahi Bashar Akash
                        </div>
                    </div>
                    <div class="col-12 border border-bottom-0 p-3">
                        <div class="mb-2 fw-medium">
                            Email:
                        </div>
                        <div class="text-secondary">
                            mahibashar2023@gmail.com
                        </div>
                    </div>
                    <div class="col-12 border border-bottom-0 p-3">
                        <div class="mb-2 fw-medium">
                            Mobile Number:
                        </div>
                        <div class="text-secondary">
                            01400125289
                        </div>
                    </div>
                    <div class="col-12 border p-3">
                        <div class="mb-2 fw-medium">
                            Preset Address:
                        </div>
                        <div class="text-secondary">
                            Mollapara, Bashtolla, Ideal Public School and College, Jessore Sadar
                        </div>
                    </div>
                </div>

                <!-- order list -->
                <div class="w-100 my-4">
                    <div class="fs-4 fw-medium mb-3 ps-0">
                        Order list
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered align-middle">
                            <thead>
                            <tr>
                                <th>
                                    <div class="min-width-250 ps-3 py-2">
                                        Name
                                    </div>
                                </th>
                                <th class="text-center">
                                    <div class="min-width-150 ps-3 py-2">
                                        Price
                                    </div>
                                </th>
                                <th class="text-center">
                                    <div class="min-width-150 ps-3 py-2">
                                        Quantity
                                    </div>
                                </th>
                                <th class="text-center">
                                    <div class="min-width-150 ps-3 py-2">
                                        Amount
                                    </div>
                                </th>
                                <th>
                                    <div class="min-width-150 ps-3 py-2">
                                        Status
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="each in orderList">
                                <td>
                                    <div class="min-width-250 ps-3 py-2">
                                        {{ each.name }}
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="min-width-150 ps-3 py-2">
                                        {{ each.price }}
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="min-width-150 ps-3 py-2">
                                        {{ each.quantity }}
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="min-width-150 ps-3 py-2">
                                        {{ each.price * each.quantity }}
                                    </div>
                                </td>
                                <td>
                                    <div class="min-width-150 ps-3 py-2">
                                        <span v-if="each.status === 1"> Pending </span>
                                        <span v-if="each.status === 2"> Completed </span>
                                        <span v-if="each.status === 3"> Return </span>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- pagination -->
                <div class="d-flex justify-content-between align-items-center border-top border-bottom my-4 py-3">
                    <div aria-label="Page navigation example" class="front-pagination">
                        <div class="pagination">
                            <div class="page-item">
                                <a class="page-link disabled" href="javascript:void(0)">
                                    <i class="bi bi-chevron-left"></i>
                                </a>
                            </div>
                            <div class="page-item active">
                                <a class="page-link" href="javascript:void(0)">
                                    1
                                </a>
                            </div>
                            <div class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    2
                                </a>
                            </div>
                            <div class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    3
                                </a>
                            </div>
                            <div class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="text-light-gray">
                        Showing 1 - 12 of 13 items
                    </div>
                </div>

            </div>

        </div>

    </section>
</template>

<script>

export default {
    data() {
        return {
            tab: 'order-list',
            orderList: [
                {id: '1', name: 'Apple', price: '10', quantity: '1', status: 1},
                {id: '2', name: 'Banana', price: '20', quantity: '2', status: 2},
                {id: '3', name: 'Coconut', price: '30', quantity: '3', status: 3},
                {id: '4', name: 'Pine Apple', price: '40', quantity: '4', status: 2},
                {id: '5', name: 'Strawberry', price: '50', quantity: '5', status: 1},
            ]
        }
    },
    mounted() {
    },
    methods: {

        /* Function to change tab */
        changeTab(tab) {
            this.tab = tab
        }

    }
}

</script>
