<template>
    <section class="py-5 w-100">
        <div class="container">
            <div class="w-100 mb-4">
                <div class="fs-4 fw-medium mb-3">
                    Customer information
                </div>
                <div class="row">
                    <div class="col-md-6 border p-3">
                        <div class="mb-2 fw-medium">
                            Name:
                        </div>
                        <div class="text-secondary">
                            Mahi Bashar Akash
                        </div>
                    </div>
                    <div class="col-md-6 border p-3">
                        <div class="mb-2 fw-medium">
                            Email:
                        </div>
                        <div class="text-secondary">
                            mahibashar2023@gmail.com
                        </div>
                    </div>
                    <div class="col-md-6 border p-3">
                        <div class="mb-2 fw-medium">
                            Mobile Number:
                        </div>
                        <div class="text-secondary">
                            01400125289
                        </div>
                    </div>
                    <div class="col-md-6 border p-3">
                        <div class="mb-2 fw-medium">
                            Preset Address:
                        </div>
                        <div class="text-secondary">
                            Mollapara, Bashtolla, Ideal Public School and College, Jessore Sadar
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-100 mb-4">
                <div class="fs-4 fw-medium mb-3">
                    Order list
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered align-middle">
                        <thead>
                        <tr>
                            <th>
                                <div class="min-width-150 p-3">
                                    Name
                                </div>
                            </th>
                            <th>
                                <div class="min-width-150 p-3">
                                    Price
                                </div>
                            </th>
                            <th>
                                <div class="min-width-150 p-3">
                                    Quantity
                                </div>
                            </th>
                            <th>
                                <div class="min-width-150 p-3">
                                    Amount
                                </div>
                            </th>
                            <th>
                                <div class="min-width-150 p-3">
                                    Status
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="each in [1,2,3,4,5]">
                            <td>
                                <div class="min-width-150 p-3">
                                    Product name {{ each }}
                                </div>
                            </td>
                            <td>
                                <div class="min-width-150 p-3">
                                    Product price {{ each }}
                                </div>
                            </td>
                            <td>
                                <div class="min-width-150 p-3">
                                    Product quantity {{ each }}
                                </div>
                            </td>
                            <td>
                                <div class="min-width-150 p-3">
                                    product amount {{ each }}
                                </div>
                            </td>
                            <td>
                                <div class="min-width-150 p-3">
                                    product status {{ each }}
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

export default {
    data() {
        return {}
    },
    mounted() {
    },
    methods: {}
}

</script>
